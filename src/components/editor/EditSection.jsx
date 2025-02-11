import { useState } from "react";
import ShowHideBtn from "./ShowHideBtn";

function EditSection({ name, children }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="editSection">
      <div className="editSectionHeader">
        <h2>{name}</h2>
        <ShowHideBtn
          isVisible={isVisible}
          toggle={() => setIsVisible(!isVisible)}
        ></ShowHideBtn>
      </div>
      {isVisible && <form className="editSectionBody">{children}</form>}
    </div>
  );
}

export default EditSection;
