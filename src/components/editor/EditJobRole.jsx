import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobTask from "./EditJobTask";
import { useState } from "react";
import randomUUID from "crypto";

function EditJobRole({
  id,
  parentID,
  onAddSibling,
  onUpdateSelf,
  onDeleteSelf,
  onChildAdd,
  onChildUpdate,
  onChildDelete,
}) {
  const [children, setChildren] = useState([]);

  const addSiblingTask = (id) => {
    const index = children.findIndex((comp) => comp.id === id);
    const newChild = { id: crypto.randomUUID(), type: "jobTask", children: [] };
    const updatedChildren = [
      ...children.slice(0, index + 1),
      newChild,
      ...children.slice(index + 1),
    ];
    setChildren(updatedChildren);
    onChildAdd(newChild, newChild.id, parentID, index);
  };

  const deleteSelfTask = (id) => {
    setChildren((prev) => prev.filter((comp) => comp.id !== id));
    onChildDelete(id);
  };

  return (
    <div className="editJobRole">
      <div className="editItemHeader">
        <h4>Job</h4>
        <div>
          <AddItemBtn onAdd={onAddSibling} id={id} text={"+"}></AddItemBtn>
          <DeleteItemBtn onDelete={onDeleteSelf} id={id}></DeleteItemBtn>
        </div>
      </div>
      <div className="editInputContainer">
        <label>Job Title</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="ex. Software Developer"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>
        <label>Job Dates</label>
        <input
          type="text"
          name="jobDates"
          placeholder="ex. 01/01-12/25"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>
        <label>Tasks:</label>
      </div>

      {children.map((child) => (
        <EditJobTask
          key={child.id}
          id={child.id}
          parentID={child.id}
          onAddSibling={addSiblingTask}
          onUpdateSelf={onChildUpdate}
          onDeleteSelf={deleteSelfTask}
        ></EditJobTask>
      ))}
      {children.length > 0 ? null : (
        <div className="editSectionAddFirst">
          <AddItemBtn
            onAdd={addSiblingTask}
            id={parentID}
            text={"+ Add Task"}
          ></AddItemBtn>
        </div>
      )}
    </div>
  );
}

export default EditJobRole;
