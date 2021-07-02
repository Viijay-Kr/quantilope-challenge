import React from "react";
import Cell from "../Cell/Cell";
import { useMatrixContext } from "../../contexts/MatrixBuilder.context";
import {
  GridContainer,
  Grid,
  CellContainer,
  AddRow,
  AddColumn,
  Divider,
  RemoveRow,
  RemoveColumn,
} from "./Matrix.styled";

/**
 * Matrix builds the question matrix in grid layout
 * @returns Grid layout of Cell
 */
const Matrix: React.FC = () => {
  const {
    iterators: { rows, columns },
    gridActions: { addRows, addColumns, removeRows, removeColumns },
  } = useMatrixContext();
  return (
    <GridContainer>
      <RemoveRow data-testid="remove-row" onClick={removeRows}>
        -
      </RemoveRow>
      <RemoveColumn data-testid="remove-col" onClick={removeColumns}>
        -
      </RemoveColumn>
      <Grid rows={rows.length} columns={columns.length}>
        {rows.map((_, rowIndex) =>
          columns.map((_, colIndex) => (
            <CellContainer key={`${colIndex}-${rowIndex}`}>
              <Cell rowIndex={rowIndex} columnIndex={colIndex} />
            </CellContainer>
          ))
        )}
      </Grid>
      <AddRow data-testid="add-row" onClick={addRows}>
        +
      </AddRow>
      <AddColumn data-testid="add-col" onClick={addColumns}>
        +
      </AddColumn>
      <Divider />
    </GridContainer>
  );
};

export default Matrix;
