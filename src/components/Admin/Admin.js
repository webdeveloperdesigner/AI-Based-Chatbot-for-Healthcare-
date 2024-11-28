import React, { useEffect, useState } from 'react';
import './Admin.css'; // Assuming your CSS is saved as Admin.css
import "../Home/Home"

function Admin() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState({ visible: false, title: '', message: '' });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    if (!user) {
      alert('No user is logged in. Redirecting to login page...');
      window.location.href = '../index.html';
      return;
    }

    if (user.role.toLowerCase() !== 'admin') {
      alert('Access denied! Only admins can view this page.');
      window.location.href = '../index.html';
      return;
    }

    const userIndex = allUsers.findIndex(u => u.userId === user.userId);
    if (userIndex > -1) {
      const currentTime = new Date().toISOString();
      allUsers[userIndex].loginTime = currentTime;
      user.loginTime = currentTime;
      localStorage.setItem('users', JSON.stringify(allUsers));
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

    setCurrentUser(user);
    setUsers(allUsers);
    setAlert({
      visible: true,
      title: 'Welcome, Admin!',
      message: `Hello ${user.username}, you have successfully logged in with admin privileges.`
    });
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const deleteUser = (userToDelete) => {
    const updatedUsers = users.filter(user => user.userId !== userToDelete.userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const closeAlert = () => {
    setAlert({ visible: false, title: '', message: '' });
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <button onClick={toggleSidebar} className="sidebar-toggle-btn">☰</button>
        <a href="./Admin.js" className="logo">Admin Dashboard</a>
        <div className="user-info">
          <img id="userPhoto" className="user-photo" src={currentUser?.image || 'default-user-photo.jpg'} alt="User" />
          <div>
            <p>Name: {currentUser?.username}</p>
            <p>Role: {currentUser?.role}</p>
            <p>User ID: {currentUser?.userId}</p>
            <p>Login Time: {new Date(currentUser?.loginTime).toLocaleString()}</p>
            <p>Registration Time: {currentUser?.registrationTime}</p>
          </div>
          <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarVisible && (
        <div className="sidebar">
          <button onClick={toggleSidebar} className="close-sidebar-btn">×</button>
          <h2>Admin User Details</h2>
          <img className="sidebar-user-photo" src={currentUser?.image || 'default-user-photo.jpg'} alt="User" />
          <p>Name: {currentUser?.username}</p>
          <p>Role: {currentUser?.role}</p>
          <p>User ID: {currentUser?.userId}</p>
          <p>Login Time: {new Date(currentUser?.loginTime).toLocaleString()}</p>
          <p>Registration Time: {currentUser?.registrationTime}</p>
          <a href="terminate.html" target="_blank" className="access-admin-btn">Access User Page</a>
        </div>
      )}

      {/* User List */}
      <div id="userDetailsContainer">
        <h2>User List</h2>
        <table id="userList">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Username</th>
              <th>Password</th>
              <th>User ID</th>
              <th>Role</th>
              <th>Email</th>
              <th>Login Time</th>
              <th>Registration Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userId}>
                <td><img src={user.image || 'default-user-photo.jpg'} className="user-list-photo" alt="User" /></td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.userId}</td>
                <td>{user.role}</td>
                <td>{user.email || 'N/A'}</td>
                <td>{user.loginTime ? new Date(user.loginTime).toLocaleString() : 'N/A'}</td>
                <td>{user.registrationTime ? new Date(user.registrationTime).toLocaleString() : 'N/A'}</td>
                <td>
                  <button onClick={() => deleteUser(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alert */}
      {alert.visible && (
        <div id="alertContainer" className={`alert-container ${alert.visible ? '' : 'hidden'}`}>
          <h4>{alert.title}</h4>
          <p>{alert.message}</p>
          <div className="alert-buttons">
            <button onClick={closeAlert}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
