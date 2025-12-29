import { useState } from "react";
import Welcome from "./components/Welcome.jsx";
import Name from "./components/Name.jsx";
import Product from "./components/Product.jsx";
import Apicall from "./components/Apicall.jsx";
import './App.css';
import Formone from "./components/Formone.jsx";
import Formtwo from "./components/Formtwo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Rajesh React App</h1>
      {/* <Welcome name="Rajesh"/> */}
      {/* <h1>Counter App</h1>
      <h2>{count}</h2> */}
      {/* <Name />
      <Product />
      <Welcome />
      <Apicall /> */}
      {/* <Formone /> */}
      <Formtwo />

      

      {/* <button onClick={() => setCount(count + 1)}>
        Increase
      </button> */}
    </div>

  );
}

export default App;

