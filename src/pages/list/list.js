import { useState, useEffect } from "react";
import "./list.css";
import { db } from "../../config/firebase-config";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";

export const List = () => {
  const [newNickname, setNewNickname] = useState("");
  const [newCompletedLevels, setNewCompletedLevels] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      nickname: newNickname,
      completedLevels: Number(newCompletedLevels),
    });
  };

  const updateUser = async (id, completedLevels) => {
    const userDoc = doc(db, "users", id);
    const newFields = { completedLevels: completedLevels + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, orderBy("completedLevels", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);

  return (
    <div className="box">
      <div className="user-grid">
        <div className="grid-title">Nickname</div>
        <div className="grid-title">Completed Levels</div>
        <div className="grid-title"></div>
        {users.map((user) => {
          return (
            <>
              <div className="grid-item">{user.nickname}</div>
              <div className="grid-item">{user.completedLevels}</div>
              <div className="grid-item">
                <button
                  className="btn delete"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete User
                </button>
                <button
                  className="btn update"
                  onClick={() => {
                    updateUser(user.id, user.completedLevels);
                  }}
                >
                  Increase Level
                </button>
              </div>
            </>
          );
        })}
        <div className="grid-item">
          <input
            placeholder="Nickname..."
            type="text"
            onChange={(event) => {
              setNewNickname(event.target.value);
            }}
          />
        </div>
        <div className="grid-item">
          <input
            placeholder="Completed Levels Amount"
            type="number"
            onChange={(event) => {
              setNewCompletedLevels(event.target.value);
            }}
          />
        </div>
        <div className="grid-item">
          <button onClick={createUser}>Create new User</button>
        </div>
      </div>
    </div>
  );
};
