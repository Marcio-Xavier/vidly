import React from "react";

const Like = props => {
  let className = "fa fa-heart";
  if (!props.liked) {
    className += "-o";
  }
  return (
    <React.Fragment>
      <i
        onClick={props.onClick}
        className={className}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      />
    </React.Fragment>
  );
};

export default Like;
