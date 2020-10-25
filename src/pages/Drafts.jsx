import React from "react";

import MailList from "../components/MailList";
import { useEmail } from "../contexts/EmailContext";

export default function Drafts() {
  const { data } = useEmail();
  return (
    <div className="page">
      <h2>Drafts</h2>

      <MailList items={data.Drafts.emails} parentLabelID={data.Drafts.name} />
    </div>
  );
}
