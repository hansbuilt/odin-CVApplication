import ResumeExperienceJob from "./ResumeExperienceJob";

function ResumeExperienceItem({ parentID, data, name, location }) {
  const roleIDs = data?.[parentID]["children"];

  const roleData = Object.values(data)
    .filter((item) => roleIDs.includes(item.id))
    .sort((a, b) => roleIDs.indexOf(a.id) - roleIDs.indexOf(b.id));
  return (
    <div className="companyItem">
      <div className="companyLine1">
        <span className="companyName">{name}</span>
        <span> </span>
        <span className="companyLocation">{location}</span>
      </div>

      {Object.keys(roleData).length > 0
        ? roleData.map((item) => (
            <ResumeExperienceJob
              key={item?.["id"] ?? ""}
              parentID={item?.["id"] ?? ""}
              data={data}
              name={item?.["jobTitle"] ?? ""}
              dates={item?.["jobDates"] ?? ""}
            ></ResumeExperienceJob>
          ))
        : ""}

      <span className="spacer"></span>
    </div>
  );
}

export default ResumeExperienceItem;
