import { useReducer, useRef, useState } from "react";
import classes from "./auth-form.module.css";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "something went wrong");
  }
  return data
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const inputEmail = useRef();
  const inputPassword = useRef();
  
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const enterEmail = inputEmail.current.value;
    const enterPassword = inputPassword.current.value;
    console.log(enterEmail, enterPassword)
    //optional add validation

    if (isLogin) {
      //code login
    } else {
      //signup
      try {
        const result = await createUser(enterEmail, enterPassword);
        console.log(result)
      }catch(err){
        console.log(err)
      }
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={inputEmail} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={inputPassword} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button >
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
