import styled from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  height: 20px;
  width: 20px;
  background: #d8e6e6;
  color: #a59c9c;
  font-weight: 700;
  cursor: pointer;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputButton = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;
