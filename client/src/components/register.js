import React from "react";
import { useNavigate } from "react-router";

export default function Register(){

    const navigate = useNavigate();

    const [loginInfo,setLoginInfo] = React.useState({
        username: '',
        password: ''
    })

    function update(value){
        setLoginInfo((prev) => {return { ...prev, ...value }})
    }

    async function onSubmit(event){
        event.preventDefault();
        const fetchParams = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginInfo),
            credentials: 'include'
        }
        await fetch(`${process.env.REACT_APP_API}/register`,fetchParams);
        navigate("/login");
    }

    return(
        <div>
            <h1 className="p-3">Registration Page</h1>
            <form onSubmit = {(e) => {onSubmit(e)}}> 
                <div>
                    <label className="m-3">
                        Username:
                        <input
                            id = "username"
                            className="form-control"
                            onChange={(e) => update({ username: e.target.value })}
                        />
                    </label>
                    <label className="m-3">
                        Password:
                        <input
                            id = "password"
                            className="form-control"
                            onChange={(e) => update({ password: e.target.value })}
                        />
                    </label>
                    <input
                    id = "submit"
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}