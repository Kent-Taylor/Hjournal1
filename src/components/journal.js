import React from "react";
import { withRouter } from "react-router";

const Journal = props => {
  const handleEditClick = () => {
    props.history.push("/updateTrack");
  };
  return (
    <div className="journal">
      <div className="journal-wrapper">
        <div className="delete-section">
          <button
            className="delete-button"
            onClick={() => props.deleteJournal(props.id)}
          >
            X
          </button>
        </div>
        <p className="symptom-text">{props.text}</p>
        <div className="pain-rate-section">
          <p className="symptom-intensity">Symptom intensity: </p>
          <p className="pain-rate-num">{props.pain_rate}/10</p>
        </div>
        <p className="journal-detail">{props.journal_detail}</p>
        <button
          className="edit-button"
          onClick={() => {
            handleEditClick();
            props.editJournal(props.id);
          }}
          to="/updateTrack"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default withRouter(Journal);
