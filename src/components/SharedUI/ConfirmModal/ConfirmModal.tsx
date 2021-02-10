import React from "react";
import { Wrapper } from "./ConfirmModal.style";
import Button from "../Button/Button";

interface Props {
  prompt: string;
}

const ConfirmModal = ({ prompt }: Props) => {
  return (
    <Wrapper>
      <p>{prompt}</p>
      <Button onClick={() => console.log("no")}>No</Button>
      <Button onClick={() => console.log("yes")}>Yes</Button>
    </Wrapper>
  );
};

export default ConfirmModal;
