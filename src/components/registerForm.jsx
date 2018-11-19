import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("Username/E-mail"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };
  doSubmit = () => {
    console.log("Submited - Call the server");
  };

  render() {
    return (
      <React.Fragment>
        <div className=" col-sm-4 align-center">
          <h3>Register</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Register")}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
