function DeleteItemBtn({ onDelete, id }) {
  return (
    <button type="button" className="buttonAddDel" onClick={() => onDelete(id)}>
      -
    </button>
  );
}

export default DeleteItemBtn;
