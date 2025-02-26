import { ChevronDown, ChevronUp } from "lucide-react";

function ShowHideBtn({ isVisible, toggle }) {
  return (
    <button type="button" className="buttonShowHide" onClick={toggle}>
      {isVisible ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
    </button>
  );
}

export default ShowHideBtn;
