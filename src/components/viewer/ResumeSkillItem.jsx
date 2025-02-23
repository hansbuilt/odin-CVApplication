function ResumeSkillItem({ skillsText }) {
  const text = skillsText ? " • " + skillsText : "";

  return (
    <div className="skillItem">
      <span>{text}</span>
    </div>
  );
}

export default ResumeSkillItem;
