import React, { Component } from "react";
class SelectLanguage extends Component {
  state = {};
  render() {
    return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-info btn-sm active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />
          PT-BR
        </label>
        <label className="btn btn-info btn-sm">
          <input type="radio" name="options" id="option2" autocomplete="off" />
          EN-US
        </label>
      </div>
    );
  }
}

export default SelectLanguage;
