import React from "react";
const Input = ({ name, label, value, error, onChange }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name} />
        {label}
        <input
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          type={name}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default Input;
