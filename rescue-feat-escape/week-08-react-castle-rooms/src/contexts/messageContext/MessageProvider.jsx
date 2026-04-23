const MessageProvider = () => {};

import { useState } from "react";
import { MessageContext } from "./MessageContext";
export const MessageProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <MessageContext.Provider
      value={{ question, setQuestion, answer, setAnswer }}
    >
      {children}
    </MessageContext.Provider>
  );
};
