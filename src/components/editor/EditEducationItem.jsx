import { useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditEducationItem({ id, onAdd, onDelete, onDataChange }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="editEducationItem">
      <div className="editItemHeader">
        <h3>Education 1</h3>
        <div className="">
          <AddItemBtn onAdd={onAdd} id={id}></AddItemBtn>
          <DeleteItemBtn onDelete={onDelete} id={id}></DeleteItemBtn>
          <ShowHideBtn
            isVisible={isVisible}
            toggle={() => setIsVisible(!isVisible)}
          ></ShowHideBtn>
        </div>
      </div>
      <div className={`editInputContainer ${isVisible ? "" : "hidden"}`}>
        <label>Institution Name</label>
        <input
          type="text"
          name="educationInstitution"
          placeholder="ex. UW-Anywhere"
          onChange={(e) =>
            onDataChange(
              // "educationData",
              id,
              e.target.name,
              e.target.value
            )
          }
        ></input>

        <label>Institution Location</label>
        <input
          type="text"
          name="educationLocation"
          placeholder="ex. Anytown, USA"
          onChange={(e) =>
            onDataChange(
              // "educationData",
              id,
              e.target.name,
              e.target.value
            )
          }
        ></input>

        <label>Degree</label>
        <input
          type="text"
          name="educationDegree"
          placeholder="ex. Bachelor of Business Administraton"
          onChange={(e) =>
            onDataChange(
              // "educationData",
              id,
              e.target.name,
              e.target.value
            )
          }
        ></input>

        <label>Graduation MM/YY</label>
        <input
          type="text"
          name="educationDates"
          placeholder="mm/yy-mm/yy, mm/yy, or yyyy"
          onChange={(e) =>
            onDataChange(
              // "educationData",
              id,
              e.target.name,
              e.target.value
            )
          }
        ></input>

        <label>Majors</label>
        <input
          type="text"
          name="educationMajors"
          placeholder="ex. Double Major, Finance and Marketing"
          onChange={(e) =>
            onDataChange(
              // "educationData",
              id,
              e.target.name,
              e.target.value
            )
          }
        ></input>

        <label>GPA</label>
        <input
          type="text"
          name="educationGPA"
          placeholder="ex. 4.0"
          onChange={(e) =>
            onDataChange(
              // "educationData",
              id,
              e.target.name,
              e.target.value
            )
          }
        ></input>
      </div>
    </div>
  );
}

export default EditEducationItem;
