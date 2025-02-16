import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditSkillItem({ id, onAdd, onDelete, onDataChange }) {
  return (
    <div className="editBulletItem">
      <input
        type="text"
        name="jobTask"
        placeholder="Skill, interest"
        onChange={(e) => onDataChange("skillsData", id, e.target.value)}
      ></input>
      <div>
        <AddItemBtn onAdd={onAdd} id={id}></AddItemBtn>
        <DeleteItemBtn onDelete={onDelete} id={id}></DeleteItemBtn>
      </div>
    </div>
  );
}

export default EditSkillItem;
