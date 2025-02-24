import { useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobRole from "./EditJobRole";

function EditJobCompany({
  id,
  parentID,
  onAddSibling,
  onUpdateSelf,
  onDeleteSelf,
  onChildAdd,
  onChildUpdate,
  onChildDelete,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const [children, setChildren] = useState([]);

  const addSiblingRole = (id) => {
    const index = children.findIndex((comp) => comp.id === id);
    const newChild = { id: crypto.randomUUID(), type: "jobRole", children: [] };
    const updatedChildren = [
      ...children.slice(0, index + 1),
      newChild,
      ...children.slice(index + 1),
    ];
    setChildren(updatedChildren);
    onChildAdd(newChild, newChild.id, parentID, index);
  };

  const deleteSelfRole = (id) => {
    setChildren((prev) => prev.filter((comp) => comp.id !== id));
    onChildDelete(id);
  };

  return (
    <div className="editJobCompany">
      <div className="editItemHeader">
        <h3>Company</h3>
        <div>
          <AddItemBtn onAdd={onAddSibling} id={id}></AddItemBtn>
          <DeleteItemBtn onDelete={onDeleteSelf} id={id}></DeleteItemBtn>
          <ShowHideBtn
            isVisible={isVisible}
            toggle={() => setIsVisible(!isVisible)}
          ></ShowHideBtn>
        </div>
      </div>
      {
        <div className={`editCompanyBody ${isVisible ? "" : "hidden"}`}>
          <div className="editInputContainer">
            <label>Company Name</label>
            <input
              type="text"
              name="jobCompany"
              placeholder="Enter company name"
              onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
            ></input>

            <label>Location</label>
            <input
              type="text"
              name="jobLocation"
              placeholder="Enter company location"
              onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
            ></input>
          </div>

          {children.map((child) => (
            <EditJobRole
              key={child.id}
              id={child.id}
              parentID={child.id}
              onAddSibling={addSiblingRole}
              onUpdateSelf={onChildUpdate}
              onDeleteSelf={deleteSelfRole}
              onChildAdd={onChildAdd}
              onChildUpdate={onChildUpdate}
              onChildDelete={onChildDelete}
            ></EditJobRole>
          ))}
          <div>
            {children.length > 0 ? null : (
              <AddItemBtn onAdd={addSiblingRole} id={parentID}></AddItemBtn>
            )}
          </div>
        </div>
      }
    </div>
  );
}

export default EditJobCompany;
