import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditSkillItem(props) {
  return (
    <>
      <form>
        <label>Skill/Interest</label>
        <input type="text" name="jobTask" required></input>
      </form>
      <AddItemBtn></AddItemBtn>
      <DeleteItemBtn></DeleteItemBtn>
    </>
  );
}

export default EditSkillItem;
