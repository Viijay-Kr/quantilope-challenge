import Summary from "./components/Summary/Summary";
import "./QuestionMatrix.css";
import React from "react";
import styled from "styled-components";
import Matrix from "./components/Matrix/Matrix";
import MatrixBuilderProvider from "./contexts/MatrixBuilder.context";
import SummaryProvider from "./contexts/Summary.context";
import EditableLabel from "components/molecules/Editable/Editable";
export interface Props {
  defaults: {
    rows: number;
    columns: number;
    questionId: number;
  };
}

const QuestionMatrix: React.FC<Props> = (props) => {
  const { defaults } = props;
  return (
    <MatrixBuilderProvider defaults={defaults}>
      <SummaryProvider>
        <FlexContainer>
          <QuestionContainer>
            <QuestionTitle
              classNames="question-title"
              label={"Question Title goes here"}
              //  TODO - the edit callback should save the tile in some state ?
              onEdit={(f) => f}
            />
            <Matrix />
          </QuestionContainer>
          <Summary />
        </FlexContainer>
      </SummaryProvider>
    </MatrixBuilderProvider>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 0px;
  margin: 0px 40px;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid;
`;

const QuestionTitle = styled(EditableLabel)``;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  justify-content: space-between;
`;

export default QuestionMatrix;
