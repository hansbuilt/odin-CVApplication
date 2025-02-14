function AddItemBtn({ onAdd, id }) {
  return (
    <button type="button" className="buttonAddDel" onClick={() => onAdd(id)}>
      +
    </button>
  );
}

export default AddItemBtn;
