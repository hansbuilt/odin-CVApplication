import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobTask from "./EditJobTask";
import { useState } from "react";
import randomUUID from "crypto";

function EditJobRole({ id, onAdd, onDelete }) {
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
    <div className="editJobRole">
      <div className="editItemHeader">
        <h4>Job 1</h4>
        <div>
          <AddItemBtn onAdd={onAdd} id={id}></AddItemBtn>
          <DeleteItemBtn onDelete={onDelete} id={id}></DeleteItemBtn>
        </div>
      </div>
      <div className="editInputContainer">
        <label>Job Title</label>
        <input type="text" name="jobTitle" required></input>
        <label>Job Dates</label>
        <input type="text" name="jobDates" required></input>
      </div>
      <label>Tasks:</label>
      {children.map((child) => (
        <EditJobTask
          key={child.id}
          id={child.id}
          onAdd={addChild}
          onDelete={deleteChild}
        ></EditJobTask>
      ))}
    </div>
  );
}

export default EditJobRole;
