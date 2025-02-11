import ResumeHeader from "./ResumeHeader";
import ResumeEducationContainer from "./ResumeEducationContainer";
import ResumeExperienceContainer from "./ResumeExperienceContainer";
import ResumeSkillsContainer from "./ResumeSkillsContainer";

function ViewerContainer({ children }) {
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
          firstName="John"
          lastName="Doe"
          addressLine1="123 Main St"
          addressLine2="Room 101"
          city="Anytown"
          state="USA"
          zip="12345"
          phone="555-555-5555"
          email="example@example.com"
        ></ResumeHeader>

        <ResumeEducationContainer></ResumeEducationContainer>
        <ResumeExperienceContainer></ResumeExperienceContainer>
        <ResumeSkillsContainer></ResumeSkillsContainer>
      </div>
    </div>
  );
}

export default ViewerContainer;
