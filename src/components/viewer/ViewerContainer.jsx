import ResumeHeader from "./ResumeHeader";
import ResumeEducationContainer from "./ResumeEducationContainer";
import ResumeExperienceContainer from "./ResumeExperienceContainer";

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
        <ResumeHeader></ResumeHeader>
        <ResumeEducationContainer></ResumeEducationContainer>
        <ResumeExperienceContainer></ResumeExperienceContainer>
      </div>
    </div>
  );
}

export default ViewerContainer;
