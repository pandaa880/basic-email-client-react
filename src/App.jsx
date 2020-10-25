import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppProviders from "./contexts";
import Sidebar from "./components/Sidebar";
import Drafts from "./pages/Drafts";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Starred from "./pages/Starred";
import { useEmail } from "./contexts/EmailContext";

import "./styles.css";

export default function App() {
  const { data } = useEmail();

  return (
    <BrowserRouter>
      <h1 className="header">
        <span role="img" aria-label="lapd">
          🚔
        </span>{" "}
        LAPD, Mail
      </h1>
      <AppProviders>
        <DndProvider backend={HTML5Backend}>
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Redirect to="/inbox" />
              </Route>
              <Route path="/inbox">
                <Inbox />
              </Route>
              <Route path="/starred">
                <Starred
                  mailItems={data.Starred.emails}
                  parentLabelID={data.Starred.name}
                />
              </Route>
              <Route path="/sent">
                <Sent
                  mailItems={data.Sent.emails}
                  parentLabelID={data.Sent.name}
                />
              </Route>
              <Route path="/drafts">
                <Drafts
                  mailItems={data.Drafts.emails}
                  parentLabelID={data.Drafts.name}
                />
              </Route>
            </Switch>
          </div>
        </DndProvider>
      </AppProviders>
    </BrowserRouter>
  );
}
