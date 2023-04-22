import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({name}) => {
  const navigate = useNavigate();
  return (
    <div className="flex self_navbar">
      <h2>React Chat</h2>
      <span className="flex self_navbar_span">
        <h4>{name}</h4>
        <button onClick={()=>
        navigate("/signout")}>Logout</button>
      </span>
    </div>
    
  )
}

export default Navbar