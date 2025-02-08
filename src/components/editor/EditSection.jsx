import ShowHideBtn from "./ShowHideBtn";

function EditSection({ name, children }) {
  return (
    <>
      <h2>{name}</h2>
      <ShowHideBtn></ShowHideBtn>
      {children}
    </>
  );
}

export default EditSection;
