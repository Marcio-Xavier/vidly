import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  doSubmit = () => {
    console.log("Submited - Call the server");
  };

  render() {
    return (
      <React.Fragment>
        <div className=" col-sm-4 align-center">
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default LoginForm;
