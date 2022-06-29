import React, {Link} from 'react';


export const Home = () =>{
    return(
        <div className="container">
        <span className="main-logo">Anonymatus
        <i className="fa-solid fa-user-secret"></i>
      </span>
        <a href="login/login.html " className="login">Log In</a>
        <a href="signup/signup.html " className="signup">Sign Up</a>
    </div>
    )

}