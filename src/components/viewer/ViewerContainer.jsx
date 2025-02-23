import ResumeHeader from "./ResumeHeader";
import ResumeEducationContainer from "./ResumeEducationContainer";
import ResumeExperienceContainer from "./ResumeExperienceContainer";
import ResumeSkillsContainer from "./ResumeSkillsContainer";

function ViewerContainer({ /*children,*/ formData }) {
  //   const [scale, setScale] = useState(1);

  //   useEffect(() => {
  //     const updateScale = () => {
  //       const pageHeight = 1056; // 11 inches * 96 DPI
  //       const windowHeight = window.innerHeight;
  //       setScale(windowHeight / pageHeight);
  //     };

  //     updateScale();
  //     window.addEventListener("resize", updateScale);
  //     return () => window.removeEventListener("resize", updateScale);
  //   }, []);

  return (
    <div className="resumeContainer">
      <div className="resumeContent">
        <ResumeHeader
          data={formData}
          // firstName={formData.generalInfo.firstName}
          // lastName={formData.generalInfo.lastName}
          // addressLine1={formData.generalInfo.addressLine1}
          // addressLine2={formData.generalInfo.addressLine2}
          // city={formData.generalInfo.city}
          // state={formData.generalInfo.state}
          // zipcode={formData.generalInfo.zipcode}
          // phoneNumber={formData.generalInfo.phoneNumber}
          // email={formData.generalInfo.email}
        ></ResumeHeader>

        {/* <ResumeEducationContainer
          data={formData.educationData}
        ></ResumeEducationContainer>
        <ResumeExperienceContainer
          data={formData.experienceData}
        ></ResumeExperienceContainer>
        <ResumeSkillsContainer
          data={formData.skillsData}
        ></ResumeSkillsContainer> */}
      </div>
    </div>
  );
}

export default ViewerContainer;
