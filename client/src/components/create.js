import React from "react";
//import { useNavigate } from "react-router";

export default function Create() {
    
    const [createData,setData] = React.useState({
        title: "",
        description: "",
        time: "",
        tags: "",
        completionStatus: false
    })

    function update(value){
        setData((prev) => {return { ...prev, ...value }})
    }

    async function onSubmit(event){
        const fetchParams = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createData)
        }
        await fetch(`${process.env.REACT_APP_API}`,fetchParams);
    }



    return (
        <div>
            <h3 className="p-4">Submit New Task</h3>
            <form onSubmit={onSubmit}>
            <div className="container">
                <label className="pb-3">Enter Task Title</label>
                <input
                className="form-control"
                id="title"
                placeholder=" Example: Explain my Math Homework "
                onChange={(e) => update({ title: e.target.value })}
                />
            </div>
            <div className="container">
                <label className="py-3">Enter Task Description</label>
                <textarea
                className="form-control"
                id="description"
                placeholder=" Example: My math homework asks me to prove that..."
                rows = "3"
                onChange={(e) => update({ description: e.target.value })}
                />
            </div>
            <div className="container">
                <label className="py-3">Enter Estimated Task Duration</label>
                <div className="row justify-content-center">
                    <div className="form-check form-check-inline col-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="5-20"
                        onChange={(e) => update({ time: e.target.value })}
                    />
                    <label className="form-check-label">5-20 mins</label>
                    </div>
                    <div className="form-check form-check-inline col-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="20-40"
                        onChange={(e) => update({ time: e.target.value })}
                    />
                    <label className="form-check-label">20-40 mins</label>
                    </div>
                    <div className="form-check form-check-inline col-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="40-60"
                        onChange={(e) => update({ time: e.target.value })}
                    />
                    <label className="form-check-label">40-60 mins</label>
                    </div>
                    <div className="form-check form-check-inline col-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="60-120"
                        onChange={(e) => update({ time: e.target.value })}
                    />
                    <label className="form-check-label">60-120 mins</label>
                    </div>
                    <div className="form-check form-check-inline col-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="120+"
                        onChange={(e) => update({ time: e.target.value })}
                    />
                    <label className="form-check-label">More than 120 mins</label>
                    </div>
                </div>
            </div>
            <div className="container p-3">
                <input
                type="submit"
                value="Submit Task"
                className="btn btn-primary"
                />
            </div>
            </form>
        </div>
    );
}