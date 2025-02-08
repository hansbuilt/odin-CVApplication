import ShowHideBtn from "./ShowHideBtn";
import AddItemBtn from "./AddItemBtn";
import DeleteItemBtn from "./DeleteItemBtn";
import EditJobRole from "./EditJobRole";

function EditJobCompany({ children }) {
  return (
    <>
      <ShowHideBtn></ShowHideBtn>
      <form>
        <label>Company Name</label>
        <input type="text" name="jobCompany" required></input>

        <label>Location</label>
        <input type="text" name="jobLocation" required></input>
      </form>
      <AddItemBtn></AddItemBtn>
      <DeleteItemBtn></DeleteItemBtn>
      <EditJobRole></EditJobRole>
      {children}
    </>
  );
}

export default EditJobCompany;
