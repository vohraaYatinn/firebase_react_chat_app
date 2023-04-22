import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../utils/firebase_config";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/index";
import { async } from "@firebase/util";

const Users = (props) => {
  const [users, setusers] = useState([]);
  const [chatDataUsers, setdatausers] = useState([]);

  const handleUsersChat = async (value) => {
    console.log("asf");

    const q = query(
      collection(db, "chats"),
      where("chatId", "array-contains", props.currentUser.uid)
    );
    console.log("asfsdsd");


    
    try {
      const querySnapshot = await getDocs(q);
      console.log("asfsdsdsadsadas");
      querySnapshot.forEach((doc) => {
        let chatDataUsers = { ...doc.data() };
        setdatausers(chatDataUsers.chatId);
      });
      console.log("asfsdsdsadsadassdsadasdasd");
    } catch (err) {
        console.log(err)
    }

    let arr = [];
    chatDataUsers.forEach(async (data) => {
      console.log(data);

      const docRef = doc(db, "users", data);
      const docSnap = await getDoc(docRef);
      // console.log(docSnap.data())
      if (users.includes(docSnap.data())) {
      } else {
        setusers((prevList) => [...prevList, docSnap.data()]);
      }

      // arr = arr.concat(docSnap.data());

      // console.log(users)
    });
    // console.log(arr)
    // setusers(arr)
  };

  useEffect(() => {

        handleUsersChat();
        


  }, []);

  //   const myState = useSelector((state) => state.changeTheUser);
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState(false);
  const handleUserName = (username=false) => {
    console.log("handleUserName");
    if(username){
    dispatch(updateUser(username));
        
    }
    else{
        dispatch(updateUser(searchName));

    }
  };
  const handleSearch = async (value) => {
    const q = query(collection(db, "users"), where("displayName", "==", value));
    try {
      const querySnapshot = await getDocs(q);
      setSearchName(false);
      querySnapshot.forEach((doc) => {
        setSearchName({ ...doc.data(), uid: doc.id });
      });
    } catch (err) {}
  };

  return (
    <div className="usersArea">
      <div className="search_user">
        <input
          type="text"
          name=""
          id=""
          placeholder="Find a user"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="users_on_chat">
        {searchName && (
          <div
            className="chat_users searched_person"
            onClick={() => {
              handleUserName();
            }}
          >
            <h3>{searchName.displayName}</h3>
            <p>test for sidebar</p>
          </div>
        )}

        {users.map((user) => {
          console.log(user);
        })}
        {users.map((user) => {
          return (
            <div className="chat_users"             onClick={() => {
                handleUserName(user);
              }}>
              <h3>{user?.displayName}</h3>
              <p>test for sidebar</p>
            </div>
          );
          console.log(user.displayName);
        })}
      </div>
    </div>
  );
};

export default Users;
