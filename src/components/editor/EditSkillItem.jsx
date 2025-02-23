import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditSkillItem({ id, onAddSibling, onUpdateSelf, onDeleteSelf }) {
  return (
    <div className="editBulletItem">
      <input
        type="text"
        name="jobTask"
        placeholder="Skill, interest"
        onChange={(e) =>
          onUpdateSelf(
            // "skillsData",
            id,
            "text",
            e.target.value
          )
        }
      ></input>
      <div>
        <AddItemBtn onAdd={onAddSibling} id={id}></AddItemBtn>
        <DeleteItemBtn onDelete={onDeleteSelf} id={id}></DeleteItemBtn>
      </div>
    </div>
  );
}

export default EditSkillItem;
