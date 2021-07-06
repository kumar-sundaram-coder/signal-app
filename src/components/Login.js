import React from "react";
import { auth, provider } from "../firebase";
import "./../css/Login.css";
export default function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <img src="./logo.png" alt="" />
      <button onClick={signIn}>Login</button>
    </div>
  );
}
