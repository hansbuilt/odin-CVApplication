function ResumeHeader({
  firstName,
  lastName,
  addressLine1,
  addressLine2,
  city,
  state,
  zipcode,
  phoneNumber,
  email,
}) {
  const headerLine1 = firstName + " " + lastName;
  const headerLine2 =
    addressLine1 +
    ", " +
    addressLine2 +
    ", " +
    city +
    ", " +
    state +
    " " +
    zipcode +
    " • " +
    phoneNumber +
    " • " +
    email;

  return (
    <div>
      <div className="resumeHeader">
        <div className="resumeHeaderName">{headerLine1}</div>
        <div className="resumeHeaderContact">{headerLine2}</div>
      </div>
      <span className="spacer"></span>
    </div>
  );
}

export default ResumeHeader;
