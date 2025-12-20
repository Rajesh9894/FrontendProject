import { useState } from "react";

export default function count() {
  const [count, setCount] = useState(1);

  function change() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>raja -{count}</h2>
      <button onClick={change}>Submit</button>
    </div>
  );
}
