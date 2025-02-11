function ShowHideBtn({ isVisible, toggle }) {
  return (
    <button className="buttonShowHide" onClick={toggle}>
      {isVisible ? "Hide" : "Show"}
    </button>
  );
}

export default ShowHideBtn;
