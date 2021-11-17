import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../../ui/UI.module.css";
import "./Account.css";
import LoginForm from "./loginform/LoginForm";
import Profile from "./Profile"
import MyContext from "../../../context/MyContext";



const Account = () => {
  const context = useContext(MyContext);
  const { auth } = context;
  const navigate = useNavigate();
 const accountView = (auth) => {
     !auth ? <LoginForm/> : <Profile/>
 }

  useEffect(() => {
    auth && navigate("/account", { replace: true });
  }, [auth, navigate]);

  return (
    <div className={classes.section_view}>
      <div className="account">
        {/* <h4>Account</h4> */}
        {!auth && <LoginForm /> }
      </div>
    </div>
  );
};

export default Account;
