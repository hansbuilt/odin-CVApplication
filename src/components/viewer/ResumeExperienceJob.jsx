import ResumeExperienceTask from "./ResumeExperienceTask";

function ResumeExperienceJob({ parentID, data, name, dates }) {
  const taskIDs = data?.[parentID]["children"];

  const taskData = Object.values(data)
    .filter((item) => taskIDs.includes(item.id))
    .sort((a, b) => taskIDs.indexOf(a.id) - taskIDs.indexOf(b.id));

  return (
    <div className="companyJob">
      <div className="companyJobHeader">
        <span>{name}</span>
        <span> </span>
        <span>{dates}</span>
      </div>

      {Object.keys(taskData).length > 0
        ? taskData.map((item) => (
            <ResumeExperienceTask
              key={item?.["id"] ?? ""}
              text={item?.["jobTask"] ?? ""}
            ></ResumeExperienceTask>
          ))
        : ""}

      {/* <div>
        <ResumeExperienceTask text="Swept and mopped floors"></ResumeExperienceTask>
        <ResumeExperienceTask text="Swept and mopped floors"></ResumeExperienceTask>
      </div> */}
    </div>
  );
}

export default ResumeExperienceJob;
