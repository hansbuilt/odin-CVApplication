import { Component, useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import randomUUID from "crypto";

function EditSection({ name, Component, formData, onInputChange }) {
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

  const handleChildDataChange = (name, value) => {
    // onInputChange({ target: { name, value } });
    onInputChange(name, value);
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
            onAdd={addChild}
            onDelete={deleteChild}
            onDataChange={handleChildDataChange}
          />
        ))}
      </div>
      {/* {isVisible && <form className="editSectionBody">{children}</form>} */}
    </div>
  );
}

export default EditSection;
