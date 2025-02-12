function AddItemBtn({ onAdd, id }) {
  return (
    <button className="buttonAddDel" onClick={() => onAdd(id)}>
      +
    </button>
  );
}

export default AddItemBtn;
