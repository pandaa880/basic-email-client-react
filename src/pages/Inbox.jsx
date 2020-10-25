import React from "react";
import { Switch, Route } from "react-router-dom";

import InboxReal from "./InboxReal";
import Forensics from "./Forensics";
import Homicide from "./Homicide";
import CaseFiles from "./CaseFiles";
import { useEmail } from "../contexts/EmailContext";

export default function Inbox() {
  const { data } = useEmail();
  return (
    <Switch>
      <Route path="/inbox" exact>
        <InboxReal
          mailItems={data.Inbox.emails}
          parentLabelID={data.Inbox.name}
        />
      </Route>
      <Route path="/inbox/forensics">
        <Forensics
          mailItems={data.Forensics.emails}
          parentLabelID={data.Forensics.name}
        />
      </Route>
      <Route path="/inbox/homicide">
        <Homicide
          mailItems={data.Homicide.emails}
          parentLabelID={data.Homicide.name}
        />
      </Route>
      <Route path="/inbox/case-files">
        <CaseFiles
          mailItems={data["Case Files"].emails}
          parentLabelID={data["Case Files"].name}
        />
      </Route>
    </Switch>
  );
}
