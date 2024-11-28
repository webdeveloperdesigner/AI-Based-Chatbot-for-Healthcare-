import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []);
  const [alertMessage, setAlertMessage] = useState(null);

  const cutoffDate = new Date("2024-11-21").toISOString();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const usernameEmail = formData.get("usernameEmail");
    const password = formData.get("password");
    const role = formData.get("role");

    const user = users.find(
      (user) =>
        ((user.registrationTime < cutoffDate
          ? user.username === usernameEmail
          : user.email === usernameEmail) &&
          user.password === password &&
          user.role === role)
    );

    if (user) {
      const loginTime = new Date().toISOString();
      user.lastLoginTime = loginTime;

      const updatedUsers = users.map((u) => (u.username === user.username ? user : u));
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(user));

      setAlertMessage({
        type: "info",
        text: `Welcome ${user.username || user.email},<br>UID: ${user.userId}<br>Last login: ${
          user.lastLoginTime || "First login"
        }`,
      });

      setTimeout(() => {
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user/Main");
        }
      }, 1000);
    } else {
      setAlertMessage({
        type: "error",
        text: "Invalid credentials. Please try again.",
      });
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const image = formData.get("image");
    const role = formData.get("role");

    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );

    if (!userExists) {
      const registrationDate = new Date().toISOString();
      const currentYear = new Date().getFullYear().toString().slice(-2);
      const userId =
        role === "admin"
          ? `AID${currentYear}${Math.floor(Math.random() * 50000).toString().padStart(5, "0")}`
          : `UID${currentYear}${Math.random().toString(36).substr(2, 10).toUpperCase()}`;

      const newUser = {
        username,
        email,
        password,
        image,
        role,
        userId,
        registrationTime: registrationDate,
        lastLoginTime: null,
      };

      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setAlertMessage({
        type: "info",
        text: `Registration successful! Your ${role} ID is: ${userId}`,
      });
      e.target.reset();
      setShowLoginForm(true);
      setShowRegisterForm(false);
    } else {
      setAlertMessage({
        type: "error",
        text: "Username or Email already exists.",
      });
    }
  };

  return (
    <div>
      {showLoader ? (
        <div className="loader-container">
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <nav>
            <div className="navbar">
              <a href="/" className="logo">
                Dr.AI BOt
              </a>
              <ul>
                <li>
                  <button onClick={() => { setShowLoginForm(true); setShowRegisterForm(false); }}>
                    Login
                  </button>
                </li>
                <li>
                  <button onClick={() => { setShowRegisterForm(true); setShowLoginForm(false); }}>
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          {(showLoginForm || showRegisterForm) && (
            <div className="login-container">
              {showLoginForm && (
                <form id="loginForm" onSubmit={handleLoginSubmit}>
                  <h2>Login</h2>
                  <input
                    type="text"
                    name="usernameEmail"
                    placeholder="Username or Email"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <select name="role" required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                  <button  type="submit">Login</button>
                </form>
              )}
              {showRegisterForm && (
                <form id="registerForm" onSubmit={handleRegisterSubmit}>
                  <h2>Register</h2>
                  <input type="text" name="username" placeholder="Username" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="password" name="password" placeholder="Password" required />
                  <input
                    type="text"
                    name="image"
                    placeholder="Profile Image URL"
                    required
                  />
                  <select name="role" required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                  <button type="submit">Register</button>
                </form>
              )}
            </div>
          )}
          {alertMessage && (
            <div className={`alert alert-${alertMessage.type}`}>
              <span dangerouslySetInnerHTML={{ __html: alertMessage.text }}></span>
              <button onClick={() => setAlertMessage(null)}>&times;</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
