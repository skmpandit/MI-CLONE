import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Nav.css";
import {logo} from "../data/data.json";

const serarchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <Link to="/">
                    <img src={logo} id="logoImage" alt="Not"/>
                </Link>
            </div>
            <Link className="navlinks" to="/">Xiaomi Phones</Link>
            <Link className="navlinks" to="/">Redmi Phones</Link>
            <Link className="navlinks" to="/">TV</Link>
            <Link className="navlinks" to="/">Laptops</Link>
            <Link className="navlinks" to="/">Fitness</Link>
            <Link className="navlinks" to="/">Home</Link>
            <Link className="navlinks" to="/">Audio</Link>
            <Link className="navlinks" to="/">Accessories</Link>
            <div className="searchBox">
                <input type="text" name="search" placeholder="Search Products"/>
                {serarchIcon}
            </div>
        </div>
    )
}

export default Navbar
