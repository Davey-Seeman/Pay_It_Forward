import React from "react";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="d-flex justify-content-between bg-light">
       <h4>
        <NavLink className="nav-link p-4" to="/">
            Home
        </NavLink>
       </h4>

       <h4>
        <NavLink className="nav-link p-4" to="/create">
          Submit Task
        </NavLink>
       </h4>

     </nav>
   </div>
 );
}
