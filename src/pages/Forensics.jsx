import React from "react";

import MailList from "../components/MailList";

export default function Forensics({ mailItems, parentLabelID }) {
  return (
    <div className="page">
      <h2>Forensics</h2>

      <MailList items={mailItems} parentLabelID={parentLabelID} />
    </div>
  );
}
