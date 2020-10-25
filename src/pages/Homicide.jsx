import React from "react";
import MailList from "../components/MailList";

export default function Homicide({ mailItems, parentLabelID }) {
  return (
    <div className="page">
      <h2>Homicide</h2>

      <MailList items={mailItems} parentLabelID={parentLabelID} />
    </div>
  );
}
