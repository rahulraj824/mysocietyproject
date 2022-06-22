import React from "react";
import {Button} from "reactstrap";

// export default function App

function Header() {
  return (
    <div className="form-container">
      <form className="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div className="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          id="phoneno"
          className="form-field"
          type="text"
          placeholder="phone number"
          name="phoneno"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        <input type ="checkbox" id="cbox" name="cbox" value="" />
        <label for="cbox">I agree to be contacted by Housing and other agents via WhatsApp, SMS, phone, email etc</label>


        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Header;