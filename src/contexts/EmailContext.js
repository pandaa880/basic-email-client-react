import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
  useReducer,
} from "react";

import { emailReducer } from "../reducers";
import { mailData } from "../static-data";

const EmailContext = createContext({
  data: mailData,
  emailCounts: {},
  dispatch: () => {},
});

function EmailProvider({ children }) {
  const [data, dispatch] = useReducer(emailReducer, mailData);
  const [emailCounts, setEmailCounts] = useState({});

  const getEmailCounts = useCallback((emailData) => {
    return Object.entries(emailData).reduce((acc, curr) => {
      const key = curr[0];
      const length = curr[1].emails.length;
      acc[key] = length;
      return acc;
    }, {});
  }, []);

  useEffect(() => {
    const counts = getEmailCounts(data);
    setEmailCounts(counts);
  }, [data, getEmailCounts]);

  return (
    <EmailContext.Provider value={{ data, emailCounts, dispatch }}>
      {children}
    </EmailContext.Provider>
  );
}

function useEmail() {
  const context = useContext(EmailContext);
  return context;
}

export { EmailProvider, useEmail };
