import React from "react";
import { useDrag } from "react-dnd";

import { useEmail } from "../contexts/EmailContext";
import { moveEmailAction } from "../actions";

export default function MailItem({ item, parentLabelID }) {
  const { dispatch } = useEmail();

  const [{ opacity }, drag] = useDrag({
    item: { name: item.title, type: parentLabelID, id: item.id, parentLabelID },
    end: (item, monitor) => {
      const dropItem = monitor.getDropResult();

      // when drop item exists & it is not same as current
      if (dropItem && item.parentLabelID !== dropItem.name) {
        const action = moveEmailAction({ dragItem: item, dropItem });
        dispatch(action);
      }
    },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  return (
    <li className="mail-item" ref={drag} style={{ opacity: opacity }}>
      <span role="img" aria-label="mark star" style={{ marginRight: "8px" }}>
        ⭐️
      </span>
      <span>
        {item.isRead || typeof item.isRead === "undefined" ? (
          item.title
        ) : (
          <strong>{item.title}</strong>
        )}
      </span>
    </li>
  );
}
