import { useMatrixContext } from "components/organisms/QuestionMartix/contexts/MatrixBuilder.context";
import { useSummaryContext } from "components/organisms/QuestionMartix/contexts/Summary.context";
import React from "react";
import styled from "styled-components";

const Summary: React.FC = () => {
  const {
    data: { imagesCount, longestRowLabel, longestColumnLabel },
  } = useSummaryContext();
  const {
    iterators: { rows, columns },
  } = useMatrixContext();
  return (
    <Container>
      <Title>Summary</Title>
      <SummaryContent>
        <SummaryItem>Number of rows : {rows.length - 1}</SummaryItem>
        <SummaryItem>Number of columns : {columns.length - 1}</SummaryItem>
        <SummaryItem>Number of images uploaded : {imagesCount}</SummaryItem>
        <SummaryItem>Longest row label : {longestRowLabel}</SummaryItem>
        <SummaryItem>Longest columns label : {longestColumnLabel}</SummaryItem>
      </SummaryContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 35px 70px;
`;

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`;

const SummaryItem = styled.span`
  font-size: 12px;
  padding: 5px 0px;
`;

const Title = styled.h3`
  font-size: 14px;
  margin: 0;
  font-weight: 700;
`;

export default Summary;
