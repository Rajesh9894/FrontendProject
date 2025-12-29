import React, { useState } from "react";

export default function Product() {

    const [data, setdata] = useState([
        "Alice",
        "Bob",
        "Charlie",
        "David",
    ]);

    const [name, setname] = useState("Raje");
    const [details, setdetails] = useState([
        {
            name: "Rajesh",
            age: 24
        },
        {
            name: "Janani",
            age: 22
        },
        {
            name: "Arun",
            age: 26
        },
        {
            name: "Kumar",
            age: 28
        },
        {
            name: "Sathish",
            age: 30
        },
    ])
    return (
        <div>
            <h1>Data shows</h1>
            {data.map((Da, i) => (
                <div>

                    <h1>{i = i + 1}{Da}</h1>

                </div>

            ))}

            {
                details.map((De) => (
                    <div>
                        <h2>Name:{De.name} & Age:{De.age}</h2>
                    </div>
                ))
            }
        </div>
    )
}
