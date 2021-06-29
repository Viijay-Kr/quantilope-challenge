import Increment from "components/atoms/Increment/Increment";
import Summary from "components/molecules/Summary/Summary";
import "./QuestionMatrix.css";
import React from "react";
import styled from "styled-components";
import Cell from "./components/Cell";
import { useMatrixBuilder } from "./hooks/useMatrixBuilder";
import { useSummary } from "./hooks/useSummary";
export interface Props {
  defaults: {
    rows: number;
    columns: number;
    questionId: number;
  };
}

const QuestionMatrix: React.FC<Props> = (props) => {
  const { defaults } = props;
  const { onAddColumns, onAddRows, rowsIterator, columnsIterator } =
    useMatrixBuilder(defaults.rows, defaults.columns);
  const summary = useSummary();
  return (
    <FlexContainer>
      <QuestionContainer>
        <QuestionTitle>Question Title goes here</QuestionTitle>
        <GridContainer>
          <Grid rows={rowsIterator.length} columns={columnsIterator.length}>
            {rowsIterator.map((_, rowIndex) =>
              columnsIterator.map((_, colIndex) => (
                <CellContainer key={`${colIndex}-${rowIndex}`}>
                  <Cell
                    updaters={summary.updaters}
                    rowIndex={rowIndex}
                    columnIndex={colIndex}
                    questionId={defaults.questionId}
                  />
                </CellContainer>
              ))
            )}
          </Grid>
          <AddRow data-testid="add-row" onClick={onAddRows}>
            +
          </AddRow>
          <AddColumn data-testid="add-col" onClick={onAddColumns}>
            +
          </AddColumn>
          <Divider />
        </GridContainer>
      </QuestionContainer>
      <Summary
        rows={rowsIterator.length - 1}
        columns={columnsIterator.length - 1}
        images={summary.values.imagesCount}
        longestRowLabelLength={summary.values.longestRowLabel}
        longestColLabelLength={summary.values.longestColumnLabel}
      />
    </FlexContainer>
  );
};

const Grid = styled.div<{ rows: number; columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 0fr);
  grid-template-rows: repeat(${(props) => props.rows}, 0fr);
  min-width: 5%;
  column-gap: 10px;
  row-gap: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0px;
  margin: 0px 40px;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  position: relative;
`;
const QuestionTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
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

const CellContainer = styled.div`
  animation: easeInOut 400ms;
`;

export default QuestionMatrix;
