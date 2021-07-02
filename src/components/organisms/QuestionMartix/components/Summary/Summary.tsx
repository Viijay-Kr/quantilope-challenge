import { useMatrixContext } from "components/organisms/QuestionMartix/contexts/MatrixBuilder.context";
import { useSummaryContext } from "components/organisms/QuestionMartix/contexts/Summary.context";
import React from "react";
import {
  Container,
  SummaryContent,
  SummaryItem,
  Title,
} from "./Summary.styled";
const Summary: React.FC = () => {
  const {
    data: {
      imagesCount,
      longestRowLabel,
      longestColumnLabel,
      shortestRowLabel,
      shortestColumnLabel,
    },
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
        <SummaryItem>Shortest row label : {shortestRowLabel}</SummaryItem>
        <SummaryItem>
          Shortest columns label : {shortestColumnLabel}
        </SummaryItem>
      </SummaryContent>
    </Container>
  );
};

export default Summary;
