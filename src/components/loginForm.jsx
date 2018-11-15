import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
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
  validate = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submited");
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <div className=" col-sm-4 align-center">
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <Input
                name="username"
                value={account.username}
                label="Username"
                onChange={this.handleChange}
                error={errors.username}
              />
              <Input
                name="password"
                value={account.password}
                label="Password"
                onChange={this.handleChange}
                error={errors.password}
              />
            </div>
            <button disabled={this.validate()} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default LoginForm;
