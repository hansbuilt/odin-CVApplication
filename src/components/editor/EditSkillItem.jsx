import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditSkillItem(props) {
  return (
    <div className="editBulletItem">
      <input type="text" name="jobTask" required></input>
      <div>
        <AddItemBtn></AddItemBtn>
        <DeleteItemBtn></DeleteItemBtn>
      </div>
    </div>
  );
}

export default EditSkillItem;
