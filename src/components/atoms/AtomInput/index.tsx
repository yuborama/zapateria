import { FC } from "react";
import {
  InputTextStyled,
  LabelStyled,
  InputTexareatStyled,
  StyledInputError,
} from "./styled";
import InputProps from "./types";

const AtomInput: FC<InputProps> = (props) => {
  const { id, label, type, formik } = props;

  return (
    <>
      <LabelStyled htmlFor={id} {...props}>
        {label}
        {type === "textbox" ? (
          <InputTexareatStyled
            value={formik?.values[`${id}`]}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            {...props}
          ></InputTexareatStyled>
        ) : (
          <InputTextStyled
            value={formik?.values[`${id}`]}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            {...props}
          ></InputTextStyled>
        )}
        {(formik?.values[`${id}`] !== "" || formik?.touched[`${id}`]) &&
        formik?.errors[`${id}`] ? (
          <StyledInputError>{formik?.errors[`${id}`]}</StyledInputError>
        ) : null}
      </LabelStyled>
    </>
  );
};

export default AtomInput;
