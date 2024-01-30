import React from "react";

export default function Display() {
    const [displayData, setData] = React.useState({
        loginStatus: false,
        username: null,
        posts: null
    });

    React.useEffect(() => {
        async function fetchData(){
            const fetchParams = {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            }

            const response = await fetch(`${process.env.REACT_APP_API}`);
            const fetchjson = await response.json();
            var auth = await fetch(`${process.env.REACT_APP_API}/auth`,fetchParams);
            var result = await auth.json();
            
            setData({posts: fetchjson, loginStatus: result.status, username:result.username })
        }
        fetchData();
        return;
    }, []);

    function postTasks(){
        var postList = []
        for (let key in displayData.posts) {
            postList.push(
                <div className="col-sm-4" key={displayData.posts[key]._id}>
                    <div className="card m-2 text-truncate">
                        <div className="card-body">
                            <h5 className="card-title">{displayData.posts[key].title}</h5>
                            <p className="card-text">{displayData.posts[key].description}</p>
                            <p className="card-text">Est. Duration: {displayData.posts[key].time} mins</p>
                            <a href="/" className="btn btn-primary">Open Task</a>
                        </div>
                    </div>
                </div>
            )
        }
        return postList
    }

    return (
        <div className="container">
            <h1>Welcome {displayData.loginStatus ? displayData.username : "Anonymous User"} </h1>
            <div className='row'>{displayData.posts ? postTasks() : "Loading..."}</div>
        </div>
    );
}