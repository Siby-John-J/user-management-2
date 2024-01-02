import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./AdminPanel.css";
import Header from "./Header";
import UserList from "./UserList";
import EditUser from "../EditUser";


function AdminPanel() {

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.admin_auth)
    const navigate = useNavigate()

    useEffect(() => {
        // setAuth()

        if(auth === false) {
            navigate('/admin_login')
        }
        
        console.log(auth)
    }, [auth])

    return (
        <div className="adminPanel">
            <Header />
            <UserList />
            <EditUser />
        </div>
    );
}

export default AdminPanel;
