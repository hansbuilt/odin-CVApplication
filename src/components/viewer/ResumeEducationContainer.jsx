import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeEducationItem from "./ResumeEducationItem";

function ResumeEducationContainer({ name, children }) {
  return (
    <ResumeSectionContainer name="Education">
      <ResumeEducationItem
        name="University of Anytown"
        location="Anytown, USA"
        degree="Bachelor of Science"
        graduation="mm/dd"
        major="Computer Science and Philosophy"
        gpa="GPA 4.0"
      ></ResumeEducationItem>
      {children}
    </ResumeSectionContainer>
  );
}

export default ResumeEducationContainer;
