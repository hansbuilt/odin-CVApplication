import ShowHideBtn from "./ShowHideBtn";

function EditSection({ name, children }) {
  return (
    <div className="editSection">
      <span className="editSectionHeader">
        <h2>{name}</h2>
        <ShowHideBtn></ShowHideBtn>
      </span>

      {children}
    </div>
  );
}

export default EditSection;
