import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const Card = ({ title, children, user }) => {
  const { handleDeleteUser } = useContext(UserContext);

  const firstLetter = title && title.charAt(0).toUpperCase();
  const cardStyle = {
    maxWidth: "540px",
  };
  //Female : FF9B9B
  //Male : 468B97

  const roundDivStyle = {
    borderRadius: "50%",
    backgroundColor: user.gender === "Female" ? "#FF9B9B" : "#468B97",
    color: "#fff",
    textAlign: "center",
    lineHeight: "90px",
    padding: "8px 17px",
    fontSize: "23px",
  };

  return (
    <div className="card mb-3 mt-2" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-2 ps-3">
          <span style={roundDivStyle}>{firstLetter}</span>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </h5>
            {children}
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDeleteUser(user.email)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "default"
};
export default Card;
