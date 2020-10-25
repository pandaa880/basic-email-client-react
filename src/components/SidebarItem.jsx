import React from "react";
import { useDrop } from "react-dnd";

import { useEmail } from "../contexts/EmailContext";

export default function SidebarItem({ children, droppableID }) {
  const { data } = useEmail();

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [...data[droppableID].allowFrom],
    drop: () => {
      return {
        name: droppableID,
      };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  let backgroundColor = "aliceblue";
  if (isActive) {
    backgroundColor = "#1abc9c";
  } else if (canDrop) {
    backgroundColor = "#1abc9c";
  }

  return (
    <div className="sidebar-item" ref={drop} style={{ backgroundColor }}>
      {children}
    </div>
  );
}
