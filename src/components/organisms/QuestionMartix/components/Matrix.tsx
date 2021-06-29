import React from "react";
import styled from "styled-components";
import Increment from "components/atoms/Increment/Increment";
import Cell from "./Cell";
import { useMatrixContext } from "../contexts/MatrixBuilder.context";

/**
 * Matrix builds the question matrix in grid layout
 * @returns Grid layout of Cell
 */
const Matrix: React.FC = () => {
  const {
    iterators: { rows, columns },
    gridActions: { addRows, addColumns },
  } = useMatrixContext();
  return (
    <GridContainer>
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

const CellContainer = styled.div`
  animation: easeInOut 400ms;
`;

const Grid = styled.div<{ rows: number; columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 0fr);
  grid-template-rows: repeat(${(props) => props.rows}, 0fr);
  min-width: 5%;
  column-gap: 10px;
  row-gap: 10px;
`;

const GridContainer = styled.div`
  position: relative;
`;

const AddRow = styled(Increment)`
  position: absolute;
  bottom: -40px;
`;

const AddColumn = styled(Increment)`
  position: absolute;
  top: 0;
  right: -40px;
`;

const Divider = styled.div`
  width: 1px;
  height: calc(100% + 25px);
  position: absolute;
  top: 0;
  right: -40px;
  background: #000;
`;

export default Matrix;
