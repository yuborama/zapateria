import styled from "@emotion/styled";
import {css} from "@emotion/react";
import { FC } from "react";

type textbodyProps = {
  size?: string;
  color?: string;
  opacity?: number;
  margin?: string;
  padding?: string;
  cursorPointer?: boolean;
  fontweight?:
    | "Thin"
    | "Extra-ligth"
    | "Ligth"
    | "Regular"
    | "Medium"
    | "Semi-bold"
    | "Bold"
    | "Extra-bold"
    | "Black";
};

const Component = styled.p<textbodyProps>`
  font-family: "Inter", sans-serif;
  margin: 0;
  font-size: ${({ size }) => size || "24px"};
  color: ${({ color }) => color || "#3C3E42"};
  font-weight: ${({ fontweight }) => fontweight || "Thin"};
  opacity: ${({ opacity }) => opacity || 100};
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  ${({cursorPointer}) => (cursorPointer && css`cursor: pointer;`)}
`;

const AtomTextBody: FC<textbodyProps> = (props) => {
  const { children } = props;
  return <Component {...props}>{children || "Default Text"}</Component>;
};

export default AtomTextBody;
