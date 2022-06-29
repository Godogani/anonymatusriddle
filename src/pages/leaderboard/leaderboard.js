import { useState, useEffect } from "react";
import "./leaderboard.css";
import { db } from "../../config/firebase-config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, orderBy("completedLevels", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);

  return (
    <div className="leaderboard-content">
      <div className="leaderboard">
        <div className="leaderboard-title"> Nickname </div>
        <div className="leaderboard-title"> Recorde </div>
        {users.map((user) => {
          return (
            <>
              <div className="leaderboard-item"> {user.nickname} </div>
              <div className="leaderboard-item">
                {" "}
                Level {user.completedLevels}{" "}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
