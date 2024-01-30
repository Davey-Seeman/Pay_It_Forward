import React from "react";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";


// Here, we display our Navbar
export default function Navbar() {

  const navigate = useNavigate();

  function loginBtn(){
    return(
      <NavLink className="btn btn-dark h-25" to="/login">
        Log in
      </NavLink>
    )
  }
  
 /* function logoutBtn(){
    return(
      <div>
        <button onClick = {logout} className="btn btn-dark h-25">Log Out</button>
      </div>
    )
  }*/

  /*async function logout(){
    const fetchParams = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    }
    await fetch(`${process.env.REACT_APP_API}/logout`,fetchParams);
    navigate("/login");
  }*/

  return (
    <div>
      <nav className="d-flex justify-content-between bg-light align-items-center">
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

        <div>{loginBtn() /*TODO: add logout btn by moving state up*/}</div>

        <NavLink className="btn btn-dark h-25 m-4" to="/register">
          Register
        </NavLink>

      </nav>
    </div>
  );
}
