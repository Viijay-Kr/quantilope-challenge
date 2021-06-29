import { useState, useCallback, useMemo } from "react";

const useMatrixBuilder = (defaultRows: number, defaultColumns: number) => {
  const [rows, addRows] = useState(defaultRows);
  const [columns, addColumns] = useState(defaultColumns);

  const onAddRows = useCallback(() => {
    addRows(rows + 1);
  }, [rows]);

  const onAddColumns = useCallback(() => {
    addColumns(columns + 1);
  }, [columns]);

  const rowsIterator = useMemo(() => new Array(rows + 1).fill(0), [rows]);
  const columnsIterator = useMemo(
    () => new Array(columns + 1).fill(0),
    [columns]
  );
  return useMemo(
    () => ({
      onAddRows,
      onAddColumns,
      rowsIterator,
      columnsIterator,
    }),
    [columnsIterator, onAddColumns, onAddRows, rowsIterator]
  );
};

export { useMatrixBuilder };
