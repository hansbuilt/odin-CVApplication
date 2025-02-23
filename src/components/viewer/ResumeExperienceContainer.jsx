import ResumeSectionContainer from "./ResumeSectionContainer";
import ResumeExperienceItem from "./ResumeExperienceItem";

function ResumeExperienceContainer({ name, data }) {
  const experienceIDs = data?.["experienceData"]["children"];

  const experienceData = Object.values(data)
    .filter((item) => experienceIDs.includes(item.id))
    .sort((a, b) => experienceIDs.indexOf(a.id) - experienceIDs.indexOf(b.id));

  if (experienceData.length === 0) return null;

  return (
    <ResumeSectionContainer name="Experience">
      {Object.keys(experienceData).length > 0
        ? experienceData.map((item) => (
            <ResumeExperienceItem
              key={item?.["id"] ?? ""}
              parentID={item?.["id"] ?? ""}
              data={data}
              name={item?.["jobCompany"] ?? ""}
              location={item?.["jobLocation"] ?? ""}
            ></ResumeExperienceItem>
          ))
        : ""}
    </ResumeSectionContainer>
  );
}

export default ResumeExperienceContainer;
