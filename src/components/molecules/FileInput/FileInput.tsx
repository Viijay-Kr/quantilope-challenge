import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  /**
   * Call back to fire after the upload event
   */
  onUpload: () => void;
  /**
   * A unique identifier for the label element to identify the input[type="file"] button
   * Should be a combination of question id and coordinates
   */
  id: string;
}
/**
 *
 * @param {Props} props
 * @returns {React.ReactElement} React Element with a hidden file input and a label element for the input element
 */
const FileInput: React.FC<Props> = (props) => {
  const { onUpload, id } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState(0);
  const onChange = useCallback(() => {
    onUpload();
    if (inputRef.current?.files) {
      setImages(images + 1);
    }
  }, [images, onUpload]);

  return (
    <Form>
      <Label htmlFor={`file-${id}`}>{images > 0 ? "" : "+"}</Label>
      <InputButton
        onChange={onChange}
        accept="image/*,.pdf"
        type="file"
        name="image"
        disabled={images > 0}
        id={`file-${id}`}
        ref={inputRef}
        data-testid={`file-${id}`}
      />
    </Form>
  );
};

const Label = styled.label`
  font-size: 14px;
  height: 20px;
  width: 20px;
  background: #d8e6e6;
  color: #a59c9c;
  font-weight: 700;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputButton = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export default FileInput;
