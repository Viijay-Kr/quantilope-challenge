import React from "react";
import { useContext } from "react";
import { useMatrixBuilder } from "../hooks/useMatrixBuilder";
interface MatrixBuilder {
  gridActions: {
    addRows: () => void;
    addColumns: () => void;
    removeRows: () => void;
    removeColumns: () => void;
  };
  iterators: {
    rows: number[];
    columns: number[];
  };
  questionId: number;
}
const MatrixContext = React.createContext<MatrixBuilder>({
  gridActions: {
    addColumns: () => {},
    addRows: () => {},
    removeRows: () => {},
    removeColumns: () => {},
  },
  iterators: {
    rows: [0, 0, 0],
    columns: [0, 0, 0],
  },
  questionId: 0,
});

const MatrixBuilderProvider: React.FC<{
  defaults: {
    rows: number;
    columns: number;
    questionId: number;
  };
}> = ({ defaults, children }) => {
  const {
    onAddRows,
    onAddColumns,
    rowsIterator,
    columnsIterator,
    onRemoveColumns,
    onRemoveRows,
  } = useMatrixBuilder(defaults.rows, defaults.columns);

  return (
    <MatrixContext.Provider
      value={{
        gridActions: {
          addRows: onAddRows,
          addColumns: onAddColumns,
          removeColumns: onRemoveColumns,
          removeRows: onRemoveRows,
        },
        iterators: {
          rows: rowsIterator,
          columns: columnsIterator,
        },
        questionId: defaults.questionId,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};

export const useMatrixContext = () => useContext(MatrixContext);

export default MatrixBuilderProvider;
