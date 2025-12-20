import React, { useState } from "react";

export default function Changename() {

  const [name, setname] = useState("DEVA");

  function namechan() {
    if (name === "DEVA") {
      setname("PRABA");
    } else {
      setname("DEVA");
    }
  }

  return (
    <div>
      <h1>My name is : {name}</h1>
      <button onClick={namechan}>Change name</button>
    </div>
  );
}

