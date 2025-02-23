function EditGeneralInfo({ id, onUpdateSelf }) {
  return (
    <div className="editGeneralInfo">
      <div className="editInputContainer">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>Address Line 1:</label>
        <input
          type="text"
          name="addressLine1"
          placeholder="ex. 123 Main St"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>Address Line 2:</label>
        <input
          type="text"
          name="addressLine2"
          placeholder=""
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>State</label>
        <input
          type="text"
          name="state"
          placeholder="Enter state"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>Zipcode</label>
        <input
          type="text"
          name="zipcode"
          placeholder="Enter zipcode"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>Phone No.</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="ex. (555) 555-5555"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>

        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="ex. example@example.com"
          onChange={(e) => onUpdateSelf(id, e.target.name, e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default EditGeneralInfo;
