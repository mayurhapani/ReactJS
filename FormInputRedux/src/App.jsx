import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./component/Form";
import Table from "./component/Table";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <Form />
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
