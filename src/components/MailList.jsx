import React from "react";
import MailItem from "./MailItem";

export default function MailList({ items, parentLabelID }) {
  if (items.length) {
    return (
      <ul className="mail-list">
        {items.map((item) => {
          return (
            <MailItem key={item.id} item={item} parentLabelID={parentLabelID} />
          );
        })}
      </ul>
    );
  }

  return <div className="no-items">No items in this filter</div>;
}
