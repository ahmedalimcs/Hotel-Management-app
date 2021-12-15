import React from "react";
import "../Form/login.css";
import  {useState}  from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";

function Login() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const Userlogin = (event)=>{
      event.preventDefault()
      let obj = {
        username: "ahmed",
        qualification : "mcs",
        inst : "saims",
        subject : "web and mobile"
      }
      console.log(obj)
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
    const user = response.user;
     console.log(user)
     
    
     })
     .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
    // ..
  });
    


  return (
    <>
      <div>
        <div className="div">
          <form onSubmit={Userlogin} className="for">
            <h1 className="h1">Login form</h1>
            <br></br>
            <div>
            <i class="fa fa-envelope icon"></i>
            <input 
              className="bid"
              type="text"
              name=""
              id=""
              placeholder="Enter email" onChange={(a => setemail(a.target.value))}/>
            </div>
            <br></br>
            <br></br>
            <div>
            <i class="fa fa-key icon"></i>
             <input
             className="inp"
              type="password"
              name=""
              id=""
              placeholder="Enter password"
            onChange={(a => setpassword(a.target.value))}/>
            </div>
            
            <br></br>
            <br></br>
            <button className="btn">Submitt</button>
            <br></br>
            <i class="bi bi-facebook"></i>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
