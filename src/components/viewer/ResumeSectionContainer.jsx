function ResumeSectionContainer({ name, children }) {
  return (
    <div className="resumeSectionContainer">
      <div className="resumeSectionName">{name}</div>
      <div className="resumeSectionContent">{children}</div>
    </div>
  );
}

export default ResumeSectionContainer;
