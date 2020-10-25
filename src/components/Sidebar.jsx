import React from "react";
import { NavLink } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import SidebarLabels from "./SidebarLabels";
import { useEmail } from "../contexts/EmailContext";

export default function Sidebar() {
  const { emailCounts } = useEmail();

  const getCountString = (counts, key) => {
    return counts[key] > 0 && `(${counts[key]})`;
  };

  return (
    <div className="sidebar">
      <NavLink to="/inbox">
        <SidebarItem droppableID="Inbox">
          <span role="img" aria-label="inbox">
            📥
          </span>{" "}
          INBOX {getCountString(emailCounts, "Inbox")}
        </SidebarItem>
      </NavLink>

      <SidebarLabels>
        <NavLink to="/inbox/forensics">
          <SidebarItem droppableID="Forensics">
            FORENSICS {getCountString(emailCounts, "Forensics")}
          </SidebarItem>
        </NavLink>
        <NavLink to="/inbox/homicide">
          <SidebarItem droppableID="Homicide">
            HOMICIDE {getCountString(emailCounts, "Homicide")}
          </SidebarItem>
        </NavLink>
        <NavLink to="/inbox/case-files">
          <SidebarItem droppableID="Case Files">
            CASE FILES {getCountString(emailCounts, "Case Files")}
          </SidebarItem>
        </NavLink>
      </SidebarLabels>

      <NavLink to="/starred">
        <SidebarItem droppableID="Starred">
          <span role="img" aria-label="inbox">
            ⭐️
          </span>{" "}
          STARRED {getCountString(emailCounts, "Starred")}
        </SidebarItem>
      </NavLink>

      <NavLink to="/sent">
        <SidebarItem droppableID="Sent">
          <span role="img" aria-label="inbox">
            ✉️
          </span>{" "}
          SENT {getCountString(emailCounts, "Sent")}
        </SidebarItem>
      </NavLink>

      <NavLink to="/drafts">
        <SidebarItem droppableID="Drafts">
          <span role="img" aria-label="inbox">
            📨
          </span>{" "}
          DRAFTS {getCountString(emailCounts, "Drafts")}
        </SidebarItem>
      </NavLink>
    </div>
  );
}
