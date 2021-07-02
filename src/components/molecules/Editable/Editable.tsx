import Label from "components/atoms/Label/Label";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  onEdit?: (label: string) => void;
  classNames?: string;
}

const EditableLabel: React.FC<Props> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(props.label);
  const onEditBegin = () => {
    setIsEditing(true);
  };
  const onEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value);
  };
  const onEditSubmit = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        setIsEditing(false);
        if (label.length > 1) {
          props.onEdit?.(label);
        } else {
          setLabel(props.label);
        }
      }
    },
    [label, props]
  );
  return (
    <>
      {!isEditing && (
        <Label
          data-testid="editable-label"
          className={props.classNames}
          onClick={onEditBegin}
        >
          {label}
        </Label>
      )}
      <StyledInput
        data-testid="hidden-label"
        type={isEditing ? "text" : "hidden"}
        value={label}
        onChange={onEdit}
        onKeyDown={onEditSubmit}
        onBlur={() => setIsEditing(false)}
      ></StyledInput>
    </>
  );
};

const StyledInput = styled.input`
  width: 100px;
`;

export default EditableLabel;
