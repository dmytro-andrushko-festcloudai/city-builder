import React, { createContext, useState, useContext, ReactNode } from "react";

interface BuilderContextType {
  zoom: string;
  onChangeZoom: (value: string) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [zoom, setZoom] = useState<string>("1");

  const onChangeZoom = (value: string) => {
    
    setZoom(value);
  };
console.log(zoom)
  return (
    <BuilderContext.Provider value={{ zoom, onChangeZoom }}>
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = (): BuilderContextType => {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
