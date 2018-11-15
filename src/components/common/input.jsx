import React from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name} />
        {label}
        <input {...rest} id={name} name={name} className="form-control" />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default Input;
