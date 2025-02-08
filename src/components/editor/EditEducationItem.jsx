import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";

function EditEducationItem(props) {
  return (
    <>
      <ShowHideBtn></ShowHideBtn>
      <form>
        <label>Institution Name</label>
        <input type="text" name="firstName" required></input>

        <label>Institution Location</label>
        <input type="text" name="lastName" required></input>

        <label>Degree Type</label>
        <input type="text" name="city" required></input>

        <label>Graduation MM/YY</label>
        <input type="text" name="state" required></input>

        <label>Majors</label>
        <input type="text" name="zipcode" required></input>

        <label>GPA</label>
        <input type="text" name="phoneNumber" required></input>
      </form>
      <AddItemBtn></AddItemBtn>
      <DeleteItemBtn></DeleteItemBtn>
    </>
  );
}

export default EditEducationItem;
