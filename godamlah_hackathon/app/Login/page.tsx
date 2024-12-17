import React from "react";
import Link from "next/link";
import "./Login.css";

const Login = () => {
  return (
    <form action="action_page.php" method="post">
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" defaultChecked name="remember" /> Remember me
        </label>
      </div>

      <div className="container">
        <div className="horizontal-links">
          <Link href="/Register">Don't have an account? Sign up here</Link>
          <span className="psw">
            <a href="#">Forgot password?</a>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
