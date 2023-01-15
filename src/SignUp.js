import React from "react";
import bazi from "./images/img1.jpg";

const SignUp = () => {
    return ( 
        <div className="homeDiv" style={{
            backgroundImage: `url(${bazi})`,
            backgroundSize: "130%",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="cent">
    
    <form>
        <h1>Sign Up</h1>
        <div>
            <label>User name : </label>
            <input type="text" name="uname" placeholder="user name"/>
        </div>
        <div>
        <label>Password: </label>
            <input type="text" name="pwd" placeholder="password"/>
        </div>
        <div>
        <label>Email Id : </label>
            <input type="text" name="email" placeholder="email_id"/>
        </div>
        <button type="submit">Sign Up</button>
   </form>
   </div>
   </div>
        
     );
};
 
export default SignUp;
