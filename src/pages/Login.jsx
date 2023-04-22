import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formdetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const { email, password } = formdetails;
      const login = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if (currentUser) navigate("/")
  })
  return (
    <div className="container__login">
      <div className="container_login_form">
        <div className="login_head all-flex ">
          <h2>React Chat</h2>
          <p>Login</p>
        </div>
        <div className="inputs_login all-flex">
          <input
            type="text"
            name="email"
            id=""
            placeholder="email"
            onChange={(e) => {
              setFormDetails({ ...formdetails, email: e.target.value });
            }}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            onChange={(e) => {
              setFormDetails({ ...formdetails, password: e.target.value });
            }}
          />
        </div>
        <div className="submit_login all-flex">
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Sign in
          </button>
        </div>
        <div className="login_foot">
          <p>
            You don't have an account?{" "}
            <span>
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
