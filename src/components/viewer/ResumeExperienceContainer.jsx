import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeExperienceItem from "./ResumeExperienceItem";

function ResumeExperienceContainer({ name, data }) {
  return (
    <ResumeSectionContainer name="Experience">
      {data.map((item) => (
        <ResumeExperienceItem
          key={item.id}
          name={item.jobCompany}
          location={item.jobLocation}
        ></ResumeExperienceItem>
      ))}
    </ResumeSectionContainer>
  );
}

export default ResumeExperienceContainer;
