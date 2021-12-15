import React from "react";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import app from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function Signin() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userSign()
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  const userSign = async (e) => {
    e.preventDefault();
    let obj1 = {
      name: "ahmedali",
      subject: "math & chemistry",
      inst: "saims",
      class: "mc",
    };
    console.log(obj1);

    const date = new Date();
    const id = date.getTime().toString();

    await setDoc(doc(db, "Message", id), obj1);

        
  }; 

  return (
    <>
      <div className="text-center border border-2px">
        <h1>Signin</h1>
        <form onSubmit={userSign}>
          <input
            required
            type="text"
            name=""
            value={name}
            id=""
            onChange={(g) => setname(g.target.value)}
            placeholder="enter your username"
          />
          <br></br>
          <br></br>
          <input
            required
            type="text"
            name=""
            value={email}
            id=""
            onChange={(g) => setemail(g.target.value)}
            placeholder="enter your email"
          />
          <br></br>
          <br></br>
          <input
            required
            type="password"
            name=""
            value={password}
            id=""
            onChange={(g) => setpassword(g.target.value)}
            placeholder="enter your password"
          />
          <br></br>
          <br></br>
          <button className="btn btn-info p-2 m-2">Submitt</button>
          {/* <button className="btn btn-danger p-2">click</button> */}
        </form>
      </div>
    </>
  );
}

export default Signin;
