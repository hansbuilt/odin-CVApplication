function DeleteItemBtn({ onDelete, id }) {
  return (
    <button className="buttonAddDel" onClick={() => onDelete(id)}>
      -
    </button>
  );
}

export default DeleteItemBtn;
