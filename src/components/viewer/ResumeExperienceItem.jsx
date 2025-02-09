import ResumeExperienceJob from "./ResumeExperienceJob";

function ResumeExperienceItem({ name, location }) {
  return (
    <div className="companyItem">
      <div className="companyLine1">
        <span className="companyName">{name}</span>
        <span> </span>
        <span className="companyLocation">{location}</span>
      </div>
      <ResumeExperienceJob
        name="Engineer 1"
        dates="mm/dd"
      ></ResumeExperienceJob>
      <span className="spacer"></span>
    </div>
  );
}

export default ResumeExperienceItem;
