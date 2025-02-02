import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function EditSection(props) {
  return <h2>{props.name}</h2>;
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="editContainer">
        <h1>Resume Builder App</h1>
        <EditSection name="General Info" />
        <EditSection name="Education" />
        <EditSection name="Experience" />
        <EditSection name="Skills & Interests" />
      </div>
      <div className="renderContainer">
        <h2>render will go here</h2>
      </div>
    </>
  );
}

export default App;
