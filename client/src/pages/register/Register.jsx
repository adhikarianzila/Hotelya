import React from "react";
import { Link } from "react-router-dom";

function Register() {
    return (
        
        <div className="login">
          <div className="lContainer">
     
        
            <input
              type="text"
              placeholder="username"
              id="username"
             
              className="lInput"
            />
             <input
              type="email"
              placeholder="your@email.com"
              id="email"
             
              className="lInput"
            />
             <input
                type="password"
                placeholder="password"
                id="password"
               
                className="lInput"
              />
               <input
                type="password"
                placeholder=" confirm password"
                id="password"
               
                className="lInput"
              />
              <button  className="lButton">
                Register
              </button>
              
              
              <div className="registerbutton">
        Already a member? 
        <Link to ="/login" className="register1"> Login</Link>
      </div>
      </div>
      </div>
      
      );
      };
      export default Register;
              