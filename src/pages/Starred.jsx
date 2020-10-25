import React from "react";

import MailList from "../components/MailList";
import { useEmail } from "../contexts/EmailContext";

export default function Starred() {
  const { data } = useEmail();
  return (
    <div className="page">
      <h2>Starred</h2>

      <MailList items={data.Starred.emails} parentLabelID={data.Starred.name} />
    </div>
  );
}
