// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // CSS file for navbar styles

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    role: "",
    email: "",
  });

  // Fetch user data from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserData({
        id: user.id || "12345", // Default ID
        name: user.name || "User Name", // Default name
        role: user.role || "User", // Default role
        email: user.email || "user@example.com", // Default email
      });
    }
  }, []);

  // Toggle sidebar on button click
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Open sidebar on mouse enter
  const handleMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  // Close sidebar on mouse leave
  const handleMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  // Toggle dropdown menu for user details
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <button id="toggleSidebar" className="toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
        <div className="navbar-right">
          <div className="user-details">
            <img
              id="profileImage"
              src="" // You can add a dynamic image URL if needed
              alt="Profile"
              className="profile-img"
              onClick={toggleDropdown} // Toggles dropdown on image click
            />
            <span id="profileName" onClick={toggleDropdown}>
              {userData.name} ▼
            </span>
            <span className="dropdown-toggle">
              <i className="fa fa-caret-down" onClick={toggleDropdown}></i>
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li>
                <strong>ID:</strong> <span id="userId">{userData.id}</span>
              </li>
              <li>
                <strong>Role:</strong> <span id="userRole">{userData.role}</span>
              </li>
              <li>
                <strong>Email:</strong> <span id="userEmail">{userData.email}</span>
              </li>
              <li>
                <button id="logoutButton" className="logout-btn" onClick={() => {
                  localStorage.removeItem("user"); // Clear user data on logout
                  setIsDropdownOpen(false);
                }}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
        id="sidebar"
        onMouseEnter={handleMouseEnter} // Open sidebar on mouse enter
        onMouseLeave={handleMouseLeave} // Close sidebar on mouse leave
      >
        <div className="logo">AI Healthcare</div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#learnMore">Learn More</Link></li>
            <li><Link to="#aiApplications">Applications</Link></li>
            <li><Link to="#aiBenefits">Benefits</Link></li>
            <li><Link to="#futureOfAI">Future</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
