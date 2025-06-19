import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../utills/BaseUrl';

function AdminSidebar() {
  const [data, setData] = useState('');
  const token = localStorage.getItem('victuraAuthToken');
  const location = useLocation(); // <-- Get current URL path

  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(`${BaseUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data?.body);
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('victuraAuthToken');
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar-account">
      <div className="account-avatar">
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"
            alt=""
          />
        </div>
        <h6 className="mb_4">{data.name}</h6>
        <div className="body-text-1">incite@gmail.com</div>
      </div>
      <ul className="my-account-nav">
        <li>
          <Link
            to="/account"
            className={`my-account-nav-item ${isActive('/account') ? 'active' : ''}`}
          >
            Account Details
          </Link>
        </li>
        <li>
          <Link
            to="/order"
            className={`my-account-nav-item ${isActive('/order') ? 'active' : ''}`}
          >
            My Orders
          </Link>
        </li>
        <li>
          <Link
            to="/address"
            className={`my-account-nav-item ${isActive('/address') ? 'active' : ''}`}
          >
            My Address
          </Link>
        </li>
        <li>
          <div onClick={handleLogOut} className="my-account-nav-item">
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
