import React from 'react'
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icons = ({ user_icon }) => {
    switch (user_icon) {
        case "Circle":
            return <FaRegCircle />
        case "Cross":
            return <FaTimes />
        default:
            return  
    }
}

export default Icons