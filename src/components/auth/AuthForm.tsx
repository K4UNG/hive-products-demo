import styles from "./AuthForm.module.css";
import React, { useState } from "react";
import LogoLarge from "../ui/LogoLarge";

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<"register" | "login">("register");
  const [username, setUsername] = useState("");
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [error, setError] = useState<"username" | "pass" | null>(null);
  const [loading, setLoading] = useState(false);

  function toggleMode() {
    setMode((prev) => {
      if (prev === "register") {
        return "login";
      } else {
        return "register";
      }
    });
  }

  function submitHandler(e: React.FormEvent) {
    setError(null);
    e.preventDefault();
    if (username.trim().length === 0) {
      setError("username");
      return;
    } else if (p1.trim().length === 0 || p2.trim().length === 0 || p1 !== p2) {
      setError("pass");
      return;
    }

  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitHandler}>
        <LogoLarge />
        <label htmlFor="username">Username</label>
        <input
          className={`${error === "username" && styles.error}`}
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="p1">Password</label>
        <input
          className={`${error === "pass" && styles.error}`}
          type="password"
          id="p1"
          name="p1"
          placeholder="Enter your password"
          autoComplete="off"
          value={p1}
          onChange={(e) => setP1(e.target.value)}
        />

        {mode === "register" && (
          <>
            <label htmlFor="p2">Confirm Password</label>
            <input
              className={`${error === "pass" && styles.error}`}
              type="password"
              id="p2"
              name="p2"
              placeholder="Re-enter your password"
              autoComplete="off"
              value={p2}
              onChange={(e) => setP2(e.target.value)}
            />
          </>
        )}

        <div className={styles.actions}>
          <button className={`${styles.button} ${loading && styles.loading}`}>
            {mode === "register" ? "Sign Up" : "Login"}
          </button>
          <div className={styles.mode}>
            {mode === "register"
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
