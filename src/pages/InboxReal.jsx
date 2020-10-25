import React from "react";

import MailList from "../components/MailList";

export default function InboxReal({ mailItems, parentLabelID }) {
  return (
    <div className="page">
      <h2>Inbox</h2>

      <MailList items={mailItems} parentLabelID={parentLabelID} />
    </div>
  );
}
