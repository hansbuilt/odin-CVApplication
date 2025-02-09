import ResumeExperienceTask from "./ResumeExperienceTask";

function ResumeExperienceJob({ name, dates, children }) {
  return (
    <div className="companyJob">
      <div className="companyJobHeader">
        <span>{name}</span>
        <span> </span>
        <span>{dates}</span>
      </div>

      <div>
        <ResumeExperienceTask text="Swept and mopped floors"></ResumeExperienceTask>
        <ResumeExperienceTask text="Swept and mopped floors"></ResumeExperienceTask>
        {children}
      </div>
    </div>
  );
}

export default ResumeExperienceJob;
