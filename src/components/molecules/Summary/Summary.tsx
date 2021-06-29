import React from "react";
import styled from "styled-components";

interface Props {
  rows: number;
  columns: number;
  images: number;
  longestRowLabelLength: number;
  longestColLabelLength: number;
}
const Summary: React.FC<Props> = (props) => {
  const {
    rows,
    columns,
    images,
    longestRowLabelLength,
    longestColLabelLength,
  } = props;

  return (
    <Container>
      <Title>Summary</Title>
      <SummaryContent>
        <SummaryItem>Number of rows : {rows}</SummaryItem>
        <SummaryItem>Number of columns : {columns}</SummaryItem>
        <SummaryItem>Number of images uploaded : {images}</SummaryItem>
        <SummaryItem>Longest row label : {longestRowLabelLength}</SummaryItem>
        <SummaryItem>
          Longest columns label : {longestColLabelLength}
        </SummaryItem>
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
