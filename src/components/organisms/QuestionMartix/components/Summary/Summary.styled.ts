import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 35px 70px;
`;

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`;

export const SummaryItem = styled.span`
  font-size: 12px;
  padding: 5px 0px;
`;

export const Title = styled.h3`
  font-size: 14px;
  margin: 0;
  font-weight: 700;
`;
