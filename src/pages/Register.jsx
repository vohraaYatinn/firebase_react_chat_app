import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth, db } from "../utils/firebase_config";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();
  const [profilePhoto, setprofilePhoto] = useState(false);
  const [file, setFile] = useState(null);
  const [formdetails, setFormDetails] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];
  const handleChange = (file) => {
    setFile(file);
  };
  const handleSignup = async () => {
    try {
      const { displayName, email, password } = formdetails;
      const res = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...formdetails,
      });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        console.log(error);
      }
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <div className="container__login">
      <div className="container_login_form">
        <div className="login_head all-flex ">
          <h2>React Chat</h2>
          <p>Register</p>
        </div>
        <div className="inputs_login all-flex">
          {!profilePhoto ? (
            <>
              <input
                type="text"
                name="displayname"
                id=""
                placeholder="display name"
                onChange={(e) => {
                  setFormDetails({
                    ...formdetails,
                    displayName: e.target.value,
                  });
                }}
              />
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
            </>
          ) : (
            <>
              <p style={{ marginBottom: "1rem", fontSize: "0.8rem" }}>
                Upload Profile Photo
              </p>
              <FileUploader
                className="fileUpload_register"
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
            </>
          )}
        </div>
        <div className="submit_login all-flex">
          <button
            onClick={() => {
              if (profilePhoto) {
                handleSignup();
              }
              setprofilePhoto(true);
            }}
          >
            {profilePhoto ? "Register" : "Next"}
          </button>
        </div>
        <div className="login_foot">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
