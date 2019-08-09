import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Welcome from "./pages/welcome";
import Home from "./pages/home";
import UpdateTrack from "./pages/updateTrack";
import Journal from "./components/journal";
import Login from "./pages/login";

import "./styles.css";

import Header from "./components/header";

function App(props) {
  const [journals, setJournals] = React.useState([]);
  const [editMode, setEditMode] = React.useState(false);
  const [currentEditId, setCurrentEditId] = React.useState("");

  const editJournal = id => {
    setEditMode(!editMode);
    setCurrentEditId(id);
    props.history.push("/updateTrack");
  };
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route path="/welcome" component={Welcome} />
            <Route
              path="/updateTrack"
              render={props => (
                <UpdateTrack
                  {...props}
                  editMode={editMode}
                  id={currentEditId}
                />
              )}
            />
            <Route path="/journal/:id" component={Journal} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
