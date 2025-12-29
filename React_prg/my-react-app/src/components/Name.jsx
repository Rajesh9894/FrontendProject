import React, { useState } from "react";
export default function name() {
    const [name, setname] = useState("Rajesh");
    const handleChange = () => {
        if (name === "Rajesh") {
            setname("Janani");
        }
        else {
            setname("Rajesh");
        }

    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={handleChange}>Change</button>
        </div>
    );
}