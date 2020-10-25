import React from "react";

import MailList from "../components/MailList";

export default function Drafts({ mailItems, parentLabelID }) {
  return (
    <div className="page">
      <h2>Drafts</h2>

      <MailList items={mailItems} parentLabelID={parentLabelID} />
    </div>
  );
}
