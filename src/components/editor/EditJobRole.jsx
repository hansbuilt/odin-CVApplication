import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobTask from "./EditJobTask";

function EditJobRole({ children }) {
  return (
    <div className="editJobRole">
      <div className="editItemHeader">
        <h4>Job 1</h4>
        <div>
          <AddItemBtn></AddItemBtn>
          <DeleteItemBtn></DeleteItemBtn>
          <ShowHideBtn></ShowHideBtn>
        </div>
      </div>
      <div className="editInputContainer">
        <label>Job Title</label>
        <input type="text" name="jobTitle" required></input>

        <label>Job Dates</label>
        <input type="text" name="jobDates" required></input>
      </div>
      <label>Tasks:</label>
      <EditJobTask></EditJobTask>
      {children}
    </div>
  );
}

export default EditJobRole;
