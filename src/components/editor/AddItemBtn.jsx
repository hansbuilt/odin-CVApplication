function AddItemBtn({ onAdd, id, text }) {
  return (
    <button type="button" className="buttonAddDel" onClick={() => onAdd(id)}>
      {text}
    </button>
  );
}

export default AddItemBtn;
