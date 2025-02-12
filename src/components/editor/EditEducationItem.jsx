import { useState } from "react";
import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditEducationItem({ id, onAdd, onDelete }) {
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
      {isVisible && (
        <div className="editInputContainer">
          <label>Institution Name</label>
          <input type="text" name="educationInstitution" required></input>

          <label>Institution Location</label>
          <input type="text" name="educationLocation" required></input>

          <label>Degree</label>
          <input type="text" name="educationDegree" required></input>

          <label>Graduation MM/YY</label>
          <input type="text" name="educationDates" required></input>

          <label>Majors</label>
          <input type="text" name="educationMajors" required></input>

          <label>GPA</label>
          <input type="text" name="educationGPA" required></input>
        </div>
      )}
    </div>
  );
}

export default EditEducationItem;
