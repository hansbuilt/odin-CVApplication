import { Component, useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import randomUUID from "crypto";
import AddItemBtn from "./AddItemBtn";

function EditSection({
  name,
  parentID,
  Component,
  onChildAdd,
  onChildUpdate,
  onChildDelete,
}) {
  const [isVisible, setIsVisible] = useState(true);

  // const [children, setChildren] = useState([{ id: 1 }]);
  const [children, setChildren] = useState([]);

  const handleAddSibling = (id) => {
    const index = children.findIndex((comp) => comp.id === id);
    const newChild = {
      id: crypto.randomUUID(),
      type: "insertType",
      children: [],
      // sortIndex: index,
    };
    const updatedChildren = [
      ...children.slice(0, index + 1),
      newChild,
      ...children.slice(index + 1),
    ];
    //sets local children
    setChildren(updatedChildren);
    //passes state update back to App
    onChildAdd(newChild, newChild.id, parentID, index);
  };

  const handleUpdateSelf = (id, field, newText) => {
    //passes state update back to App
    onChildUpdate(id, field, newText);
  };

  const handleDeleteSelf = (id) => {
    //sets local children
    setChildren((prev) => prev.filter((comp) => comp.id !== id));
    //this needs to be unhardcoded
    //passes state update back to App
    onChildDelete(id);
  };

  return (
    <div className="editSection">
      <div className="editSectionHeader">
        <h2>{name}</h2>
        <ShowHideBtn
          isVisible={isVisible}
          toggle={() => setIsVisible(!isVisible)}
        ></ShowHideBtn>
      </div>
      <div className={isVisible ? "" : "hidden"}>
        {children.map((child) => (
          <Component
            key={child.id}
            id={child.id}
            parentID={child.id}
            onAddSibling={handleAddSibling}
            onUpdateSelf={handleUpdateSelf}
            onDeleteSelf={handleDeleteSelf}
            onChildAdd={onChildAdd}
            onChildUpdate={onChildUpdate}
            onChildDelete={onChildDelete}
            // onInputChange={handleChildDataChange2} //dont think this one matters
          />
        ))}
      </div>
      <div>
        <AddItemBtn onAdd={handleAddSibling} id={parentID}></AddItemBtn>
      </div>
      {/* {isVisible && <form className="editSectionBody">{children}</form>} */}
    </div>
  );
}

export default EditSection;

// const componentMap = {
//   EditGeneralInfo: "generalInfo",
//   EditEducationItem: "educationData",
//   EditJobCompany: "experienceData",
//   EditSkillItem: "skillsData",
// };

// const getComponentDataKey = (Component) => {
//   const componentName = Component.displayName || Component.name || "n/a";
//   return componentMap[componentName] || "not found";
// };

// const addChild = (id) => {
//   const index = children.findIndex((comp) => comp.id === id);
//   const newChild = { id: crypto.randomUUID() };
//   const updatedChildren = [
//     ...children.slice(0, index + 1),
//     newChild,
//     ...children.slice(index + 1),
//   ];
//   setChildren(updatedChildren);
//   //this needs to be unhardcoded
//   onChildAdd(newChild, getComponentDataKey(Component));
// };

// const deleteChild = (id) => {
//   setChildren((prev) => prev.filter((comp) => comp.id !== id));
//   //this needs to be unhardcoded
//   onChildDelete(id, getComponentDataKey(Component));
// };

// const handleChildDataChange = (key, id, field, newText) => {
//   onChildUpdate(key, id, field, newText);
// };

// const handleInputUpdate = (name, value) => {
//   onInputChange(name, value);
// };
