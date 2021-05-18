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
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  backgroudColor?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
};

const Container = styled.div<AtomWrapperProps>`
  height: ${({ height }) => (height || "100%")};
  width: ${({ width }) => (width || "100%")};
  display: flex;
  position: relative;   
  margin: ${({ margin }) => (margin || "0px")};
  padding: ${({ padding }) => padding || "0px"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  background-color: ${({ backgroudColor }) => backgroudColor || "transparent"};
`;

const AtomWrapper: FC<AtomWrapperProps> = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default AtomWrapper;
