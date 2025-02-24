import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditJobTask({ id, onAddSibling, onUpdateSelf, onDeleteSelf }) {
  return (
    <div className="editJobTask editBulletItem">
      <input
        type="text"
        name="jobTask"
        onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
      ></input>
      <div>
        <AddItemBtn onAdd={onAddSibling} id={id} text={"+"}></AddItemBtn>
        <DeleteItemBtn onDelete={onDeleteSelf} id={id}></DeleteItemBtn>
      </div>
    </div>
  );
}

export default EditJobTask;
