import React from "react";

export default function Login(){

    const [loginInfo,setLoginInfo] = React.useState({
        username: '',
        password: ''
    })

    function update(value){
        setLoginInfo((prev) => {return { ...prev, ...value }})
    }

    async function onSubmit(event){
        const fetchParams = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify(loginInfo)
        }
        await fetch(`${process.env.REACT_APP_API}` + "/login",fetchParams);
    }

    return(
        <div>
            <h1 className="p-3">Login Page</h1>
            <form onSubmit = {onSubmit}> 
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
                    value="Log In"
                    className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}