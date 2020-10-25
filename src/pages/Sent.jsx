import React from "react";

import MailList from "../components/MailList";
import { useEmail } from "../contexts/EmailContext";

export default function Sent() {
  const { data } = useEmail();
  return (
    <div className="page">
      <h2>Sent</h2>

      <MailList items={data.Sent.emails} parentLabelID={data.Sent.name} />
    </div>
  );
}
