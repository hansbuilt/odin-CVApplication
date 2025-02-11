function ShowHideBtn({ isVisible, toggle }) {
  return (
    <button type="button" className="buttonShowHide" onClick={toggle}>
      {isVisible ? "Hide" : "Show"}
    </button>
  );
}

export default ShowHideBtn;
