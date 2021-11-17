import React, { useContext } from "react";
import MyContext from "../../../../context/MyContext";
import "./LoginForm.css"
import "./LoginModal.css"
import classes from "../../../ui/UI.module.css"
const LoginForm = () => {
  const context = useContext(MyContext);
  const { form, handleFormInput, handleFormSubmit, auth } = context;
  const { user, password } = form;
  const logged = !auth && (
    <div className="login_view">
      <div className="login_modal">
        <form className=".form">
          <input
            onChange={(e) => handleFormInput(e)}
            name="user"
            value={user}
            type="text"
            placeholder="UserName"
            className="form-input"
          />
          <input
            onChange={(e) => handleFormInput(e)}
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <button className="form-button" onClick={(e) => handleFormSubmit(e)}>
            Login
          </button>
        </form>
      </div>
    </div>
  ); 
  return logged;
};
export default LoginForm;
