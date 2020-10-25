import React from "react";

import { EmailProvider } from "./EmailContext";

function AppProviders({ children }) {
  return <EmailProvider>{children}</EmailProvider>;
}

export default AppProviders;
