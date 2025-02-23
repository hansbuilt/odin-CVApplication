function ResumeHeader({ data }) {
  const headerKey = data?.["generalData"]["children"][0];
  const headerData = data[headerKey];
  console.log(headerData);

  const headerLine1 =
    (headerData?.["firstName"] ? headerData["firstName"] + " " : "") +
    (headerData?.["lastName"] ?? "");
  const headerLine2 =
    (headerData?.["addressLine1"] ? headerData["addressLine1"] : "") +
    (headerData?.["addressLine2"] ? ", " + headerData["addressLine2"] : "") +
    (headerData?.["city"] ? ", " + headerData["city"] : "") +
    (headerData?.["state"] ? ", " + headerData["state"] : "") +
    (headerData?.["zipcode"] ? ", " + headerData["zipcode"] : "") +
    (headerData?.["phoneNumber"] ? " • " + headerData["phoneNumber"] : "") +
    (headerData?.["email"] ? " • " + headerData["email"] : "");

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
