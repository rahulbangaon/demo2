import React from 'react'
import './style.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav>
        <h1 className="logo">Student Management</h1>
        <ul className="nav-items">
            <Link to={'/students'}> <li className="nav-item">Students</li> </Link>
            <Link to={'/'}> <li className="nav-item">Add Student</li> </Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;