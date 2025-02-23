import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeSkillItem from "./ResumeSkillItem";

function ResumeSkillsContainer({ name, data /*children*/ }) {
  const skillsIDs = data?.["skillsData"]["children"];

  const skillsData = Object.values(data)
    .filter((item) => skillsIDs.includes(item.id))
    .sort((a, b) => skillsIDs.indexOf(a.id) - skillsIDs.indexOf(b.id));

  if (skillsIDs.length === 0) return null;

  return (
    <ResumeSectionContainer name="Skills & Interests">
      {Object.keys(skillsData).length > 0
        ? skillsData.map((item) => (
            <ResumeSkillItem
              key={item?.["id"] ?? ""}
              skillsText={item?.["text"] ?? ""}
            ></ResumeSkillItem>
          ))
        : ""}
    </ResumeSectionContainer>
  );
}

export default ResumeSkillsContainer;
