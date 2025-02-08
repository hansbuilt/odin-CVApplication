import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import EditSection from "./components/editor/EditSection";
import EditGeneralInfo from "./components/editor/EditGeneralInfo";
import EditEducationItem from "./components/editor/EditEducationItem";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="editContainer">
        <h1>Resume Builder App</h1>
        <EditSection name="General Info">
          <EditGeneralInfo></EditGeneralInfo>
        </EditSection>
        <EditSection name="Education">
          <EditEducationItem></EditEducationItem>
        </EditSection>

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
