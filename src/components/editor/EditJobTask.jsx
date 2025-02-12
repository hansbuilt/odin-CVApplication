import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditJobTask({ id, onAdd, onDelete }) {
  return (
    <div className="editJobTask editBulletItem">
      <input type="text" name="jobTask" required></input>
      <div>
        <AddItemBtn onAdd={onAdd} id={id}></AddItemBtn>
        <DeleteItemBtn onDelete={onDelete} id={id}></DeleteItemBtn>
      </div>
    </div>
  );
}

export default EditJobTask;
