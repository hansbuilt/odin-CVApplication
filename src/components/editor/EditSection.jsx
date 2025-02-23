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

  const [children, setChildren] = useState([]);

  const handleAddSibling = (id) => {
    const index = children.findIndex((comp) => comp.id === id);
    const newChild = {
      id: crypto.randomUUID(),
      type: "insertType",
      children: [],
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
          />
        ))}
      </div>
      <div>
        <AddItemBtn onAdd={handleAddSibling} id={parentID}></AddItemBtn>
      </div>
    </div>
  );
}

export default EditSection;
