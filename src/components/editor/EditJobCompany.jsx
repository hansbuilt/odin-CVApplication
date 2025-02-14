import { useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobRole from "./EditJobRole";
import randomUUID from "crypto";

function EditJobCompany({ id, onAdd, onDelete }) {
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
    <div className="editJobCompany">
      <div className="editItemHeader">
        <h3>Company 1</h3>
        <div>
          <AddItemBtn onAdd={onAdd} id={id}></AddItemBtn>
          <DeleteItemBtn onDelete={onDelete} id={id}></DeleteItemBtn>
          <ShowHideBtn
            isVisible={isVisible}
            toggle={() => setIsVisible(!isVisible)}
          ></ShowHideBtn>
        </div>
      </div>
      {
        <div className={`editCompanyBody ${isVisible ? "hidden" : ""}`}>
          <div className="editInputContainer">
            <label>Company Name</label>
            <input type="text" name="jobCompany" required></input>

            <label>Location</label>
            <input type="text" name="jobLocation" required></input>
          </div>
          {
            /*isVisible &&*/
            children.map((child) => (
              <EditJobRole
                key={child.id}
                id={child.id}
                onAdd={addChild}
                onDelete={deleteChild}
              ></EditJobRole>
            ))
          }
        </div>
      }
    </div>
  );
}

export default EditJobCompany;
