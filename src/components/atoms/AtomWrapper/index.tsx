import styled from "@emotion/styled";
import { FC } from "react";

type AtomWrapperProps = {
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  fullwidth?: boolean;
  display?: "grid" | "flex";
  columns?: number;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  backgroudColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  gap?: string;
  id?: string;
};

const Container = styled.div<AtomWrapperProps>`
  position: relative;
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};
  display: ${({ display }) => display || "flex"};
  grid-template-columns: repeat(${({ columns }) => columns || 1}, 1fr);
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  background-color: ${({ backgroudColor }) => backgroudColor || "transparent"};
  gap:  ${({ gap }) => gap || "0px"};
`;

const AtomWrapper: FC<AtomWrapperProps> = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default AtomWrapper;
