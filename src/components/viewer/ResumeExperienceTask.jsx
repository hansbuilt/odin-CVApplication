function ResumeExperienceTask({ text }) {
  const formatText = text ? "• " + text : "";

  return (
    <div className="companyJob">
      <span>{formatText}</span>
    </div>
  );
}

export default ResumeExperienceTask;
