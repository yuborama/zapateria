import styled from "@emotion/styled";
import InputProps from "./types";

export const LabelStyled = styled.label<InputProps>`
display: flex;
flex-direction: column;
width: ${({ width }) => width || "250px"};
color: ${({ colorLabel }) => colorLabel || "#47585d"};
margin: ${({ margin }) => margin || "0px"};
`;

export const InputTextStyled = styled.input<InputProps>`
  border: 2px solid #c8d2dd;
  margin: 10px 0px 20px 0px;
  width: 100%;
  height: ${({ height }) => height || "40px"};
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#x"};
  color: #244a77;
  padding: 0px 0px 0px 15px;
  font-size: 14px;
  font-weight: 500;
`;

export const InputTexareatStyled = styled.textarea<InputProps>`
  border: 2px solid #c8d2dd;
  margin: 10px 0px 20px 0px;
  width: 100%;
  height: ${({ height }) => height || "90px"};
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#FFFFFF"};
  color: #244a77;
  padding: 0px 0px 0px 15px;
  font-size: 14px;
  font-weight: 500;
`;
