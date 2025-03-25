"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import NoticePopup from "./NoticePopup";

type NoticeContextType = {
  showNotice: (message: string, isNotice?:boolean) => void;
};

const NoticeContext = createContext<NoticeContextType | undefined>(undefined);

export function useNotice() {
  const context = useContext(NoticeContext);
  if (!context) throw new Error("useError must be used within ErrorProvider");
  return context;
}

export function NoticeProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isNotice, setIsNotice] = useState(false);
  function showNotice(message: string, isNotice: boolean = false) {
    setMessage(message);
    setIsVisible(true);
    setIsNotice(isNotice);
  }
  

  function handleClose() {
    setIsVisible(false);
  }

  return (
    <NoticeContext.Provider value={{ showNotice: showNotice }}>
      {children}
      <NoticePopup message={message} isVisible={isVisible} onClose={handleClose} isNotice={isNotice} />
    </NoticeContext.Provider>
  );
}
