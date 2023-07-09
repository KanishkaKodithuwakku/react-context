import React from "react";

const CardDescription = ({ text, secondary }) => {
  return (
    <>
      <p className="card-text">
        <small className="text-body-secondary">{text}</small>
      </p>
    </>
  );
}
CardDescription.defaultProps = {
  text: "text here",
  secondary: true
};
export default CardDescription;
