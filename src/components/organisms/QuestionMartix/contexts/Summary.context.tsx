import React from "react";
import { useContext } from "react";
import { useSummary } from "../hooks/useSummary";

interface SummaryShape {
  data: {
    imagesCount: number;
    longestRowLabel: number;
    longestColumnLabel: number;
  };
  actions: {
    setImagesCount: () => void;
    setLongestRowLabel: (val: string) => void;
    setLongestColumnLabel: (val: string) => void;
  };
}

const SummaryContext = React.createContext<SummaryShape>({
  data: {
    imagesCount: 0,
    longestRowLabel: 0,
    longestColumnLabel: 0,
  },
  actions: {
    setImagesCount: () => {},
    setLongestRowLabel: () => {},
    setLongestColumnLabel: () => {},
  },
});

const SummaryProvider: React.FC = ({ children }) => {
  const { values, updaters } = useSummary();

  return (
    <SummaryContext.Provider
      value={{
        data: { ...values },
        actions: { ...updaters },
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export const useSummaryContext = () => useContext(SummaryContext);
export default SummaryProvider;
