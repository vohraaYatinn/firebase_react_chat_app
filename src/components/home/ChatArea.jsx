import React from 'react'
import InputText from './InputText'
import { useEffect,useRef } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase_config";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/index";
import { useSelector } from "react-redux";

const ChatArea = () => {
    const myState = useSelector((state) => state.changeTheUser);


  return (
    <>
    <div className="chatarea">
        <div className="chatarea_chats">
            <div className="send mb2">
                <p>Hello</p>
            </div>
            <div className="recieve mb2">
                <p>yes</p>
            </div>
            <div className="send mb2">
                <p>How r you</p>
            </div>
            <div className="recieve mb2">
                <p>I am fine</p>
            </div>
            <div className="send mb2">
                <p>what are you doing hey hey hey</p>
            </div>
            <div className="recieve mb2">
                <p>I am fine</p>
            </div>
            <div className="send mb2">
                <p>what are you doing</p>
            </div>            <div className="recieve mb2">
                <p>I am fine</p>
            </div>
            <div className="send mb2">
                <p>what are you doing</p>
            </div>
    
        </div>
        <div className="bottom_input">
    <InputText/>
    </div>
    </div>
    </>
  )
}

export default ChatArea