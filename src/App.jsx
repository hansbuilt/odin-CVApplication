import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./Viewer.css";
import EditSection from "./components/editor/EditSection";
import EditGeneralInfo from "./components/editor/EditGeneralInfo";
import EditEducationItem from "./components/editor/EditEducationItem";
import EditJobCompany from "./components/editor/EditJobCompany";
import EditSkillsList from "./components/editor/EditSkillList";
import EditSkillItem from "./components/editor/EditSkillItem";
import ViewerContainer from "./components/viewer/ViewerContainer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="editContainer">
        <h1>Resume Builder App</h1>
        <EditSection name="General Info" Component={EditGeneralInfo}>
          {/* <EditGeneralInfo></EditGeneralInfo> */}
        </EditSection>

        <EditSection name="Education" Component={EditEducationItem}>
          {/* <EditEducationItem></EditEducationItem> */}
        </EditSection>

        <EditSection name="Experience" Component={EditJobCompany}>
          <EditJobCompany></EditJobCompany>
        </EditSection>

        <EditSection name="Skills & Interests" Component={EditSkillItem}>
          <EditSkillsList></EditSkillsList>
        </EditSection>
      </div>
      <div className="renderContainer">
        <ViewerContainer></ViewerContainer>
      </div>
    </>
  );
}

export default App;
