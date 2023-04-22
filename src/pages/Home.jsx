import React, { useEffect, useState } from "react";
import { firebaseAuth, db } from "../utils/firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import Navbar from "../components/home/SelfNavbar";
import ChatNavbar from "../components/home/ChatNavbar";
import Users from "../components/home/Users";
import ChatArea from "../components/home/ChatArea";
import loader from "../assets/loader3.gif"
// import { collection, query, where, getDocs } from "firebase/firestore";

const Home = () => {
  const [currentUser, setcurrentUser] = useState(false);
  const [fetchedData, setfetchedData] = useState();
  const [userNames, setUserNames] = useState(false);
  const navigate = useNavigate()
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setcurrentUser(currentUser);
    }
    else{
      navigate("/login")
    }
  });
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("email", "==", firebaseAuth.currentUser.email)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.data())
        setfetchedData(doc.data());
      });
    } catch (err) {}
  };
  useEffect(() => {
    if (firebaseAuth.currentUser?.uid) handleSearch();
  }, [currentUser]);

  return(
  <>
  <div className="body_chat all-flex">
  {(currentUser && fetchedData?.displayName) ?<>
  <div className="chatapp">
  <div className="flex navbar_area">
    <Navbar name={fetchedData.displayName}/>
    <ChatNavbar/>
    </div>
    <div className="flex chatarea">
      <Users currentUser={currentUser} setUserNames={setUserNames}/>
      <ChatArea/>
    </div>
    </div>
    </>:
    <>
    <img src={loader} alt="" className="loaderImg"/>
    </>
  }
  </div>
  </>
  )
};
export default Home;
