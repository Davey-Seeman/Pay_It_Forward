import React from "react";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {

  const [loginStatus,setLoginStatus] = React.useState(false);

  React.useEffect(() => {
    async function fetchAuth(){
      const fetchParams = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: 'include'
      }
      var auth = await fetch(`${process.env.REACT_APP_API}/auth`,fetchParams);
      var result = await auth.json()
      if (result.status){
        console.log("welcome:" + result.username);
      }
      setLoginStatus(result);
    }
    fetchAuth();
    return;
  }, []);

  function loginBtn(){
    return(
      <NavLink className="btn btn-dark h-25" to="/login">
        Log in
      </NavLink>
    )
  }
  
  function logoutBtn(){
    return(
      <div>
        <h3>Welcome {loginStatus.username}</h3>
        <button onClick = {logout} className="btn btn-dark h-25">Log Out</button>
      </div>
    )
  }

  async function logout(){
    setLoginStatus(false)
    const fetchParams = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    }
    await fetch(`${process.env.REACT_APP_API}/logout`,fetchParams);
  }

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

        <div>{loginStatus.status ? logoutBtn() : loginBtn()}</div>

        <NavLink className="btn btn-dark h-25 m-4" to="/register">
          Register
        </NavLink>

      </nav>
    </div>
  );
}
