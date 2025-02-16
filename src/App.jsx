import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./Viewer.css";
import EditSection from "./components/editor/EditSection";
import EditGeneralInfo from "./components/editor/EditGeneralInfo";
import EditEducationItem from "./components/editor/EditEducationItem";
import EditJobCompany from "./components/editor/EditJobCompany";
// import EditSkillsList from "./components/editor/EditSkillList";
import EditSkillItem from "./components/editor/EditSkillItem";
import ViewerContainer from "./components/viewer/ViewerContainer";

function App() {
  const [formData, setFormData] = useState({
    generalInfo: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
      phoneNumber: "",
      email: "",
    },
    educationData: [],
    experienceData: [],
    skillsData: [],

    // educationData: {
    //   institution: "",
    //   location: "",
    //   degree: "",
    //   graduationDate: "",
    //   majors: "",
    //   gpa: "",
    // },
  });

  const updateNestedState = (obj, path, value) => {
    //this function unpacks a dot notated variable location into an array, to updated a nested state object value
    const keys = path.split(".");
    let newObj = { ...obj };

    let temp = newObj;
    for (let i = 0; i < keys.length - 1; i++) {
      temp[keys[i]] = { ...temp[keys[i]] };
      temp = temp[keys[i]];
    }

    temp[keys[keys.length - 1]] = value;

    return newObj;
  };

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleInputChange = (name, value) => {
    setFormData((prev) => updateNestedState(prev, name, value));
  };

  const handleChildAdd = (obj, key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: [...prev[key], obj],
    }));
  };

  const handleChildDelete = (id, key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].filter((child) => child.id !== id),
    }));
  };

  const handleChildUpdate = (key, id, newText) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].map((child) =>
        child.id === id ? { ...child, text: newText } : child
      ),
    }));
  };

  // const handleChildUpdate = (id, text) => {
  // }

  return (
    <>
      <div className="editContainer">
        <h1>Resume Builder App</h1>
        <EditSection
          name="General Info"
          Component={EditGeneralInfo}
          formData={formData}
          onInputChange={handleInputChange}
        >
          {/* <EditGeneralInfo></EditGeneralInfo> */}
        </EditSection>

        <EditSection name="Education" Component={EditEducationItem}>
          {/* <EditEducationItem></EditEducationItem> */}
        </EditSection>

        <EditSection name="Experience" Component={EditJobCompany}>
          <EditJobCompany></EditJobCompany>
        </EditSection>

        <EditSection
          name="Skills & Interests"
          Component={EditSkillItem}
          formData={formData}
          onInputChange={handleInputChange}
          onChildAdd={handleChildAdd}
          onChildUpdate={handleChildUpdate}
          onChildDelete={handleChildDelete}
        >
          {/* <EditSkillsList></EditSkillsList> */}
        </EditSection>
      </div>
      <div className="renderContainer">
        <ViewerContainer formData={formData}></ViewerContainer>
      </div>
    </>
  );
}

export default App;
