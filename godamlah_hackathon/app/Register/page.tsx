"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./register.css";
import axios from "axios";

// Define in React Function Syntax, Type Casting due to Type Safety
const sign_in = async (setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>) => {
  let username = (document.getElementById("username") as HTMLInputElement).value;
  let email = (document.getElementById("email") as HTMLInputElement).value;
  let password = (document.getElementById("psw") as HTMLInputElement).value;

  let post = await axios.post("http://127.0.0.1:5000", {
    username: username,
    password: password,
    email: email,
  });
  console.log(post.status);

  // After registration, show the overlay
  if (post.status === 200) {
    setShowOverlay(true);
  }
};

const Register = () => {
  const [showOverlay, setShowOverlay] = useState(false); // State to control the overlay visibility

  return (
    <div>
      {/* Form */}
      <form action="action_page.php">
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <hr />

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault(); // Prevent default form submission
                sign_in(setShowOverlay); // Call the sign_in function
              }}
              className="registerbtn"
            >
              Register
            </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <a href="/Login">Sign in</a>.
          </p>
        </div>
      </form>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <p>A confirmation email has been sent!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
