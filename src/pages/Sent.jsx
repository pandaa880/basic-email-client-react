import React from "react";
import MailList from "../components/MailList";

export default function Sent({ mailItems, parentLabelID }) {
  return (
    <div className="page">
      <h2>Sent</h2>

      <MailList items={mailItems} parentLabelID={parentLabelID} />
    </div>
  );
}
