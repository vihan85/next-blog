import { useReducer, useRef, useState } from "react";
import classes from "./auth-form.module.css";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const inputEmail = useRef();
  const inputPassword = useRef();
  const enterEmail = inputEmail.current;
  const enterPassword = inputPassword.current;
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (isLogin) {
    } else {
      createUser(enterEmail);
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={inputEmail} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={inputPassword} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>
            {isLogin ? "Login" : "Create Account"}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
