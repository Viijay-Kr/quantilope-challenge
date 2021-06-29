import React from "react";
import RadioButton from "components/atoms/RadioButton/RadioButton";
import Editable from "components/molecules/Editable/Editable";
import FileInput from "components/molecules/FileInput/FileInput";
import { useSummary } from "../hooks/useSummary";
import styled from "styled-components";

interface Props {
  rowIndex: number;
  columnIndex: number;
  updaters: ReturnType<typeof useSummary>["updaters"];
  questionId: number;
}

/**
 * This is a cell component used to conditionally render the cell item
 * It depends on rowIndex , columnIndex to determine the component to render based on the position in the grid
 * take updater function to update the summary of the question
 * @param {Props} param
 * @returns React.ReactElement
 */
const Cell: React.FC<Props> = ({
  rowIndex,
  columnIndex,
  updaters,
  questionId,
}) => {
  const { setImagesCount, setLongestRowLabel, setLongestColumnLabel } =
    updaters;

  // Leaving the first cell empty to provide space for the rows and column legends
  if (rowIndex === 0 && columnIndex === 0) {
    return null;
  }

  // The first column and rows higher than 0 should always render row legends
  if (columnIndex === 0 && rowIndex > 0) {
    return (
      <RowLegends>
        <FileInput
          id={`${questionId}-${rowIndex}-${columnIndex}`}
          onUpload={setImagesCount}
        />
        <Editable onEdit={setLongestRowLabel} label={`row${rowIndex}`} />
      </RowLegends>
    );
  }

  // The first row and columns higher than 0 should always render columns legends
  if (rowIndex === 0 && columnIndex > 0) {
    return (
      <ColumnLegends>
        <FileInput
          id={`${questionId}-${rowIndex}-${columnIndex}`}
          onUpload={setImagesCount}
        />
        <Editable onEdit={setLongestColumnLabel} label={`col${columnIndex}`} />
      </ColumnLegends>
    );
  }

  // Rest of the cells will be occupied by Radio buttons
  return <RadioButton type="radio" data-testid="radio-button" />;
};

const RowLegends = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
const ColumnLegends = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 5px;
  }
`;

export default Cell;
