import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeSkillItem from "./ResumeSkillItem";

function ResumeSkillsContainer({ name, data /*children*/ }) {
  return (
    <ResumeSectionContainer name="Skills & Interests">
      {data.map((item) => (
        <ResumeSkillItem key={item.id} text={item.text}></ResumeSkillItem>
      ))}
      {/* {children} */}
    </ResumeSectionContainer>
  );
}

export default ResumeSkillsContainer;
