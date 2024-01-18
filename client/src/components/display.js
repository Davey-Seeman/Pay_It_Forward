import React from "react";
//import { useNavigate } from "react-router";

export default function Display() {
    const [displayData, setData] = React.useState(null);

    React.useEffect(() => {
        async function fetchData(){
        const response = await fetch(`${process.env.API_URI}`);
        const fetchjson = await response.json();
        setData(fetchjson);
        }
        fetchData();
        return;
    }, []);

    function postTasks(){
        var postList = []
        for (let key in displayData) {
            postList.push(
                <div className="col-sm-4" key={displayData[key]._id}>
                    <div className="card m-2 text-truncate">
                        <div className="card-body">
                            <h5 className="card-title">{displayData[key].title}</h5>
                            <p className="card-text">{displayData[key].description}</p>
                            <p className="card-text">Est. Duration: {displayData[key].time} mins</p>
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
            <div className='row'>{!displayData ? "Loading..." : postTasks()}</div>
        </div>
    );
}