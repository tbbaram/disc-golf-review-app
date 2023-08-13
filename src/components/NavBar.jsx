import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
        </div>
    )
}

export default NavBar;