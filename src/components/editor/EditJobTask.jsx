import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditJobTask() {
  return (
    <div className="editJobTask editBulletItem">
      <input type="text" name="jobTask" required></input>
      <div>
        <AddItemBtn></AddItemBtn>
        <DeleteItemBtn></DeleteItemBtn>
      </div>
    </div>
  );
}

export default EditJobTask;
