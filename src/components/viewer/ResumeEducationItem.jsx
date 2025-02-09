function ResumeEducationItem({
  name,
  location,
  degree,
  graduation,
  major,
  gpa,
}) {
  return (
    <div className="educationItem">
      <div className="educationLine1">
        <span className="institutionName">{name}</span>
        <span> </span>
        <span className="institutionLocation">{location}</span>
      </div>
      <div className="educationLine2">
        <span className="degree">{degree}</span>
        <span> </span>
        <span className="graduation">{graduation}</span>
      </div>
      <div className="educationLine3">
        <span className="majors">{major}</span>
        <span> </span>
        <span className="gpa">{gpa}</span>
      </div>
    </div>
  );
}

export default ResumeEducationItem;
