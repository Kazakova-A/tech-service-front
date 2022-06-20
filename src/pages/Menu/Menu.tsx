import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <Link to="/">Create Jobs</Link>
      <Link to="/employees">Employees</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
  );
}

export default Menu;
