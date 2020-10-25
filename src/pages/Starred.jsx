import React from "react";
import MailList from "../components/MailList";

export default function Starred({ mailItems, parentLabelID }) {
  return (
    <div className="page">
      <h2>Starred</h2>

      <MailList items={mailItems} parentLabelID={parentLabelID} />
    </div>
  );
}
