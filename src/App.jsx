import { useState } from "react";
import "./App.css";
import "./Viewer.css";
import EditSection from "./components/editor/EditSection";
import EditGeneralInfo from "./components/editor/EditGeneralInfo";
import EditEducationItem from "./components/editor/EditEducationItem";
import EditJobCompany from "./components/editor/EditJobCompany";
import EditSkillItem from "./components/editor/EditSkillItem";
import ViewerContainer from "./components/viewer/ViewerContainer";
import PrintResumeBtn from "./components/editor/PrintResumeBtn";

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

  const handleItemAdd = (obj, key, parentID, insertIndex) => {
    setFormData((prev) => {
      //appends new object to end of entire state item, children not touched yet
      const newData = {
        ...prev,
        [key]: obj,
      };

      // Get the parent's children, sorted by index
      let updatedParentChildren = [
        ...prev[parentID].children.slice(0, insertIndex + 1),
        key,
        ...prev[parentID].children.slice(insertIndex + 1),
      ];

      // console.log(updatedParentChildren);
      // .sort(        (a, b) => a.index - b.index
      // Shift indices of existing children at or after insert position

      // Update the parent's children list
      newData[parentID] = {
        ...prev[parentID],
        children: updatedParentChildren,
      };

      return newData;
    });

    //need to figure out ordering
  };

  const handleItemDelete = (key) => {
    setFormData((prev) => {
      const newData = { ...prev };

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

      return newData;
    });
  };

  const handleItemUpdate = (key, attribute, attributeValue) => {
    setFormData((prev) => ({
      ...prev,
      [key]: { ...prev[key], [attribute]: attributeValue },
    }));
  };

  return (
    <>
      <div className="editContainer">
        <div className="headerContainer">
          <h1 id="appHeader">Resume Builder App</h1>
          <PrintResumeBtn></PrintResumeBtn>
        </div>

        <EditSection
          name="General Info"
          parentID="generalData"
          Component={EditGeneralInfo}
          onChildAdd={handleItemAdd}
          onChildUpdate={handleItemUpdate}
        ></EditSection>

        <EditSection
          name="Education"
          parentID="educationData"
          Component={EditEducationItem}
          onChildAdd={handleItemAdd}
          onChildUpdate={handleItemUpdate}
          onChildDelete={handleItemDelete}
        ></EditSection>

        <EditSection
          name="Experience"
          parentID="experienceData"
          Component={EditJobCompany}
          onChildAdd={handleItemAdd}
          onChildUpdate={handleItemUpdate}
          onChildDelete={handleItemDelete}
        ></EditSection>

        <EditSection
          name="Skills & Interests"
          parentID="skillsData"
          Component={EditSkillItem}
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
