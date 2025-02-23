function ResumeHeader({ data }) {
  const headerKey = data?.["generalData"]["children"][0];
  const headerData = data[headerKey];

  const headerLine1 =
    (headerData?.["firstName"] ? headerData["firstName"] + " " : "") +
    (headerData?.["lastName"] ?? "");

  const addressParts = [
    headerData?.["addressLine1"] ?? headerData["addressLine1"],
    headerData?.["addressLine2"] ?? headerData["addressLine2"],
    headerData?.["city"] ?? headerData["city"],
    headerData?.["state"] ?? headerData["state"],
    headerData?.["zipcode"] ?? headerData["zipcode"],
  ].filter(Boolean);

  const addressString = addressParts.join(", ");

  const headerLine2Parts = [
    addressString,
    headerData?.["phoneNumber"] ?? headerData["phoneNumber"],
    headerData?.["email"] ?? headerData["email"],
  ].filter(Boolean);

  const headerLine2 = headerLine2Parts.join(" • ");

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
