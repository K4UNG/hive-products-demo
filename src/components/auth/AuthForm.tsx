import styles from "./AuthForm.module.css";
import React, { useState } from "react";
import LogoLarge from "../ui/LogoLarge";

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<"signup" | "login">("signup");

  function toggleMode() {
    setMode((prev) => {
      if (prev === "signup") {
        return "login";
      } else {
        return "signup";
      }
    });
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitHandler}>
        <LogoLarge />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />

        <label htmlFor="p1">Password</label>
        <input
          type="password"
          id="p1"
          name="p1"
          placeholder="Enter your password"
        />

        {mode === "signup" && (
          <>
            <label htmlFor="p2">Confirm Password</label>
            <input
              type="password"
              id="p2"
              name="p2"
              placeholder="Re-enter your password"
            />
          </>
        )}

        <div className={styles.actions}>
          <button className={styles.button}>
            {mode === "signup" ? "Sign Up" : "Login"}
          </button>
          <div className={styles.mode}>
            {mode === "signup"
              ? "Aleady have an account? Login "
              : "Don't have an account? Sign up "}
            <button type="button" onClick={toggleMode}>
              here
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
