import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {}
  };
  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .label("Number in Stock"),
    rate: Joi.number()
      .min(1)
      .max(5)
  };
  render() {
    return (
      <React.Fragment>
        <h3>My Movies</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {this.renderInput("title", "Title")}
            {this.renderSelect("genre", "select")}
            {this.renderInput("numberInStock", "Number in Stock", "number")}
            {this.renderInput("rate", "Rate", "number")}
            {this.renderButton("Save")}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
