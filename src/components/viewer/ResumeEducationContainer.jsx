import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeEducationItem from "./ResumeEducationItem";

function ResumeEducationContainer({ name, data }) {
  return (
    <ResumeSectionContainer name="Education">
      {data.map((item) => (
        <ResumeEducationItem
          key={item.id}
          name={item.educationInstitution}
          location={item.educationLocation}
          degree={item.educationDegree}
          graduation={item.educationDates}
          major={item.educationMajors}
          gpa={item.educationGPA}
        ></ResumeEducationItem>
      ))}

      <span className="spacer"></span>
    </ResumeSectionContainer>
  );
}

export default ResumeEducationContainer;
