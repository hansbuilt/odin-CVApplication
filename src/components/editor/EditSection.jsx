import ShowHideBtn from "./ShowHideBtn";

function EditSection({ name, children }) {
  return (
    <div className="editSection">
      <div className="editSectionHeader">
        <h2>{name}</h2>
        <ShowHideBtn></ShowHideBtn>
      </div>
      <form className="editSectionBody">{children}</form>
    </div>
  );
}

export default EditSection;
