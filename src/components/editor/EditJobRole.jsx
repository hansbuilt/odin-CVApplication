import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobTask from "./EditJobTask";

function EditJobRole({ children }) {
  return (
    <>
      <form>
        <label>Job Title</label>
        <input type="text" name="jobTitle" required></input>

        <label>Job Dates</label>
        <input type="text" name="jobDates" required></input>
      </form>
      <AddItemBtn></AddItemBtn>
      <DeleteItemBtn></DeleteItemBtn>
      <EditJobTask></EditJobTask>
      {children}
    </>
  );
}

export default EditJobRole;
