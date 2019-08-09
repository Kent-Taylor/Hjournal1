import React from "react";
import { NavLink } from "react-router-dom";

import Journal from "../components/journal";

const Home = props => {
  const [journals, setJournals] = React.useState([]);
  const [editMode, setEditMode] = React.useState(false);
  const [currentEditId, setCurrentEditId] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("https://hjournal.herokuapp.com/journals")
        .then(response => response.json())
        .then(data => setJournals(data))
        .catch(error => console.log(error));
    };
    fetchData();
  }, []);

  const deleteJournal = id => {
    fetch(`https://hjournal.herokuapp.com/journal/${id}`, {
      method: "DELETE"
    })
      .then(setJournals(journals.filter(journal => journal.id !== id)))
      .catch(error => console.log("Delete err", error));
  };

  const editJournal = id => {
    setEditMode(!editMode);
    setCurrentEditId(id);
    props.history.push("/updateTrack");
  };

  console.log("editMode", currentEditId);

  const renderJournals = () => {
    return journals.map(journal => {
      return (
        <Journal
          key={journal.id}
          id={journal.id}
          text={journal.symptom}
          pain_rate={journal.pain_rate}
          journal_detail={journal.journal_detail}
          deleteJournal={deleteJournal}
          editJournal={editJournal}
        />
      );
    });
  };
  return (
    <form>
      <div className="home-container">
        <div className="new-track-button">
          <NavLink exact className="common-button" to="/updateTrack">
            New Symptom
          </NavLink>
          <div className="render-journals">{renderJournals()}</div>
        </div>
      </div>
    </form>
  );
};

export default Home;
