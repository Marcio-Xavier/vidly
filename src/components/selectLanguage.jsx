import React, { Component } from "react";
class SelectLanguage extends Component {
  state = {};
  render() {
    return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-info btn-sm active">
          <input type="radio" name="options" id="option1" autoComplete="off" />
          EN-US
        </label>
        <label className="btn btn-info btn-sm">
          <input type="radio" name="options" id="option2" autoComplete="off" />
          PT-BR
        </label>
      </div>
    );
  }
}

export default SelectLanguage;
