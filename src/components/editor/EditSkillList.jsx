import EditSkillItem from "./EditSkillItem";

function EditSkillsList({ children }) {
  return (
    <div className="editSkillsList">
      <EditSkillItem></EditSkillItem>
      <EditSkillItem></EditSkillItem>
      <EditSkillItem></EditSkillItem>
      {children}
    </div>
  );
}

export default EditSkillsList;
