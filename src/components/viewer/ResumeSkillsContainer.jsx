import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeSkillItem from "./ResumeSkillItem";

function ResumeSkillsContainer({ name, children }) {
  return (
    <ResumeSectionContainer name="Skills & Interests">
      <ResumeSkillItem text="Github, React"></ResumeSkillItem>

      {children}
    </ResumeSectionContainer>
  );
}

export default ResumeSkillsContainer;
