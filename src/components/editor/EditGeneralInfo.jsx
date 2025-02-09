function EditGeneralInfo(props) {
  return (
    <div className="editGeneralInfo editInputContainer">
      <label>First Name:</label>
      <input type="text" name="firstName" required></input>

      <label>Last Name:</label>
      <input type="text" name="lastName" required></input>

      <label>Address Line 1:</label>
      <input type="text" name="addressLine1" required></input>

      <label>Address Line 2:</label>
      <input type="text" name="addressLine2" required></input>

      <label>City</label>
      <input type="text" name="city" required></input>

      <label>State</label>
      <input type="text" name="state" required></input>

      <label>Zip</label>
      <input type="text" name="zipcode" required></input>

      <label>Phone No.</label>
      <input type="text" name="phoneNumber" required></input>

      <label>Email</label>
      <input type="text" name="email" required></input>
    </div>
  );
}

export default EditGeneralInfo;
