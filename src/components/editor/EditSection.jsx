import { Component, useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import randomUUID from "crypto";

function EditSection({ name, Component }) {
  const [isVisible, setIsVisible] = useState(true);

  const [children, setChildren] = useState([{ id: 1 }]);

  const addChild = (id) => {
    const index = children.findIndex((comp) => comp.id === id);
    const newChild = { id: crypto.randomUUID() };
    const updatedChildren = [
      ...children.slice(0, index + 1),
      newChild,
      ...children.slice(index + 1),
    ];
    setChildren(updatedChildren);
  };

  const deleteChild = (id) => {
    setChildren((prev) => prev.filter((comp) => comp.id !== id));
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
      {isVisible &&
        children.map((child) => (
          <Component
            key={child.id}
            id={child.id}
            onAdd={addChild}
            onDelete={deleteChild}
          />
        ))}
      {/* {isVisible && <form className="editSectionBody">{children}</form>} */}
    </div>
  );
}

export default EditSection;
