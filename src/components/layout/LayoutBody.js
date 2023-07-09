import React from "react";
import ColumnLayout from "./Column";

const LayoutBody = ({ children}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">{children}</div>
        </div>
      </div>
    </>
  );
}

export default LayoutBody;
