import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  onClick: () => void;
}

const Label: React.FC<Props> = (props) => {
  const { text, onClick } = props;
  return (
    <StyledLabel onClick={onClick} data-testid="editable-label">
      {text}
    </StyledLabel>
  );
};

const StyledLabel = styled.span`
  font-size: 10px;
  font-style: italic;
  color: #000;
  width: max-content;
`;

export default Label;
