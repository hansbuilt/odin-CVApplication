import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditJobTask({ children }) {
  return (
    <>
      <form>
        <label>Task</label>
        <input type="text" name="jobTask" required></input>
      </form>
      <AddItemBtn></AddItemBtn>
      <DeleteItemBtn></DeleteItemBtn>
      {children}
    </>
  );
}

export default EditJobTask;
