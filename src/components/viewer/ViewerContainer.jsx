import ResumeHeader from "./ResumeHeader";
import ResumeEducationContainer from "./ResumeEducationContainer";
import ResumeExperienceContainer from "./ResumeExperienceContainer";
import ResumeSkillsContainer from "./ResumeSkillsContainer";

function ViewerContainer({ formData }) {
  return (
    <div className="resumeContainer">
      <div className="resumeContent">
        <ResumeHeader data={formData}></ResumeHeader>

        <ResumeEducationContainer data={formData}></ResumeEducationContainer>
        <ResumeExperienceContainer data={formData}></ResumeExperienceContainer>
        <ResumeSkillsContainer data={formData}></ResumeSkillsContainer>
      </div>
    </div>
  );
}

export default ViewerContainer;
