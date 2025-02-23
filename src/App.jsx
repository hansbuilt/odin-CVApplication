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
    generalData: {
      id: "generalData",
      type: "contianer",
      children: [],
    },
    educationData: { id: "educationData", type: "container", children: [] },
    experienceData: { id: "experienceData", type: "container", children: [] },
    skillsData: { id: "skillsData", type: "container", children: [] },
  });

  const handleItemAdd = (obj, key, parentID) => {
    setFormData((prev) => ({
      ...prev,

      [parentID]: {
        ...prev[parentID],
        children: [...prev[parentID].children, key],
      },
      [key]: obj,
    }));

    //need to figure out ordering
  };

  const handleItemDelete = (key) => {
    setFormData((prev) => {
      const newData = { ...prev };
      // delete newData[key];

      const collectDescendents = (parentID) => {
        let idsToDelete = [parentID];

        prev[parentID]?.children.forEach((childID) => {
          idsToDelete = idsToDelete.concat(collectDescendents(childID));
        });
        return idsToDelete;
      };

      const idsToDelete = collectDescendents(key);

      idsToDelete.forEach((id) => {
        delete newData[id];
      });

      Object.keys(newData).forEach((id) => {
        newData[id] = {
          ...newData[id],
          children: newData[id].children.filter(
            (childID) => !idsToDelete.includes(childID)
          ),
        };
      });

      // Object.keys(newData).forEach((id) => {
      //   newData[id] = {
      //     ...newData[id],
      //     children: newData[id].children.filter((childID) => childID !== key),
      //   };
      // });

      //need to add recursive deletion of children

      return newData;
    });
  };

  const handleItemUpdate = (key, attribute, attributeValue) => {
    setFormData((prev) => ({
      ...prev,
      [key]: { ...prev[key], [attribute]: attributeValue },
      // [key]: { ...prev[key], [attribute]: attributeValue },
    }));
  };

  return (
    <>
      <div className="editContainer">
        <h1>Resume Builder App</h1>

        <EditSection
          name="General Info"
          parentID="generalData"
          Component={EditGeneralInfo}
          // formData={formData}
          onChildAdd={handleItemAdd}
          onChildUpdate={handleItemUpdate}
        ></EditSection>

        <EditSection
          name="Education"
          parentID="educationData"
          Component={EditEducationItem}
          // formData={formData}
          // onInputChange={handleInputChange}
          onChildAdd={handleItemAdd}
          onChildUpdate={handleItemUpdate}
          onChildDelete={handleItemDelete}
        ></EditSection>

        <EditSection
          name="Experience"
          parentID="experienceData"
          Component={EditJobCompany}
          // formData={formData2}
          // onInputChange={handleInputChange}
          onChildAdd={handleItemAdd}
          onChildUpdate={handleItemUpdate}
          onChildDelete={handleItemDelete}
        ></EditSection>

        <EditSection
          name="Skills & Interests"
          parentID="skillsData"
          Component={EditSkillItem}
          // formData={formData}
          // onInputChange={handleInputChange}
          onChildAdd={handleItemAdd}
          onChildUpdate={handleItemUpdate}
          onChildDelete={handleItemDelete}
        ></EditSection>
      </div>
      <div className="renderContainer">
        <ViewerContainer formData={formData}></ViewerContainer>
      </div>
    </>
  );
}

export default App;

// const [formData, setFormData] = useState({
//   generalInfo: {
//     firstName: "",
//     lastName: "",
//     addressLine1: "",
//     addressLine2: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     phoneNumber: "",
//     email: "",
//   },
//   educationData: [{ id: 1 }],
//   experienceData: [{ id: 1 }],
//   skillsData: [{ id: 1 }],
// });

// const updateNestedState = (obj, path, value) => {
//   //this function unpacks a dot notated variable location into an array, to updated a nested state object value
//   const keys = path.split(".");
//   let newObj = { ...obj };

//   let temp = newObj;
//   for (let i = 0; i < keys.length - 1; i++) {
//     temp[keys[i]] = { ...temp[keys[i]] };
//     temp = temp[keys[i]];
//   }

//   temp[keys[keys.length - 1]] = value;

//   return newObj;
// };

// const handleInputChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleInputChange = (name, value) => {
//   setFormData((prev) => updateNestedState(prev, name, value));
// };

// const handleChildAdd = (obj, key) => {
//   setFormData((prev) => ({
//     ...prev,
//     [key]: [...prev[key], obj],
//   }));
// };

// const handleChildDelete = (id, key) => {
//   setFormData((prev) => ({
//     ...prev,
//     [key]: prev[key].filter((child) => child.id !== id),
//   }));
// };

// const handleChildUpdate = (key, id, field, newValue) => {
//   setFormData((prev) => ({
//     ...prev,
//     [key]: prev[key].map((child) =>
//       child.id === id ? { ...child, [field]: newValue } : child
//     ),
//   }));
// };

// const handleChildUpdate = (id, text) => {
// }
