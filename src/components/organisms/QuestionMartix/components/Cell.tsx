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

const Cell: React.FC<Props> = ({
  rowIndex,
  columnIndex,
  updaters,
  questionId,
}) => {
  const { setImagesCount, setLongestRowLabel, setLongestColumnLabel } =
    updaters;
  if (rowIndex === 0 && columnIndex === 0) {
    return null;
  }
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
