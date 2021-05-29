import { FC } from "react";
import { InputTextStyled, LabelStyled, InputTexareatStyled } from "./styled";
import InputProps from "./types";

const AtomInput: FC<InputProps> = (props) => {
  const { id, label, type } = props;

  return (
    <LabelStyled htmlFor={id} {...props}>
      {label}
      {type === "textbox" ? (
          <InputTexareatStyled {...props}></InputTexareatStyled>
          ) : (
          <InputTextStyled {...props}></InputTextStyled>
      )}
    </LabelStyled>
  );
};

export default AtomInput;
