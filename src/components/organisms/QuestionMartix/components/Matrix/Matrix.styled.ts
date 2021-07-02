import styled, { css } from "styled-components";
import Button from "components/atoms/Button/Button";

export const CellContainer = styled.div`
  animation: easeInOut 400ms;
`;

export const Grid = styled.div<{ rows: number; columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 0fr);
  grid-template-rows: repeat(${(props) => props.rows}, 0fr);
  min-width: 5%;
  column-gap: 10px;
  row-gap: 10px;
`;

const Absolute = css`
  position: absolute;
`;

export const GridContainer = styled.div`
  position: relative;
`;

export const AddRow = styled(Button)`
  ${Absolute}
  bottom: -30px;
  left: 0px;
`;

export const RemoveRow = styled(Button)`
  ${Absolute}
  top: 15px;
  left: 3px;
`;

export const AddColumn = styled(Button)`
  ${Absolute}
  top: -5px;
  right: -30px;
`;

export const RemoveColumn = styled(Button)`
  ${Absolute}
  top: -5px;
  left: 30px;
`;

export const Divider = styled.div`
  width: 1px;
  height: calc(100% + 25px);
  ${Absolute}
  top: 0;
  right: -40px;
  background: #000;
`;
