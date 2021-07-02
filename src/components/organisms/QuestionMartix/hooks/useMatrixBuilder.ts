import { useState, useCallback, useMemo } from "react";

/**
 * `useMatrixBuilder` is used for encapsulating the matrix building logic
 * @param {number} defaultRows
 * @param {number} defaultColumns
 * @returns -  { onAddRows , onAddColumns, rowsIterator, columnsIterator }
 */
const useMatrixBuilder = (defaultRows: number, defaultColumns: number) => {
  const [rows, setRows] = useState(defaultRows);
  const [columns, setColumns] = useState(defaultColumns);

  const onAddRows = useCallback(() => {
    setRows(rows + 1);
  }, [rows]);

  const onAddColumns = useCallback(() => {
    setColumns(columns + 1);
  }, [columns]);

  const onRemoveRows = useCallback(() => {
    if (rows > 1) {
      setRows(rows - 1);
    }
  }, [rows]);

  const onRemoveColumns = useCallback(() => {
    if (columns > 1) {
      setColumns(columns - 1);
    }
  }, [columns]);

  // Adding one extra row and column by default for showing the legends
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
      onRemoveRows,
      onRemoveColumns,
    }),
    [
      columnsIterator,
      onAddColumns,
      onAddRows,
      onRemoveColumns,
      onRemoveRows,
      rowsIterator,
    ]
  );
};

export { useMatrixBuilder };
