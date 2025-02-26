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
      const newData = {
        ...prev,
        [key]: obj,
      };

      let updatedParentChildren = [
        ...prev[parentID].children.slice(0, insertIndex + 1),
        key,
        ...prev[parentID].children.slice(insertIndex + 1),
      ];

      newData[parentID] = {
        ...prev[parentID],
        children: updatedParentChildren,
      };

      return newData;
    });
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
