'use client';

import React, { createContext, useContext, useState } from "react";

interface ViewContextType {
  currentView: React.ReactNode | null;
  setView: (view: React.ReactNode | null) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<React.ReactNode | null>(null);

  const setView = (view: React.ReactNode | null) => {
    setCurrentView(view);
  };

  return (
    <ViewContext.Provider value={{ currentView, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
};
