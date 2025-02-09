import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeExperienceItem from "./ResumeExperienceItem";

function ResumeExperienceContainer({ name, children }) {
  return (
    <ResumeSectionContainer name="Experience">
      <ResumeExperienceItem
        name="Acme Corporation"
        location="Anytown, USA"
      ></ResumeExperienceItem>

      {children}
    </ResumeSectionContainer>
  );
}

export default ResumeExperienceContainer;
