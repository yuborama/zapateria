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
  margin?: [string, string];
  padding?: [string, string];
};

const Container = styled.div<AtomWrapperProps>`
  height: 100%;
  display: flex;
  margin: ${({ margin }) => (margin ? `${margin[0]} ${margin[1]}` : "0px")};
  padding: ${({ padding }) => padding ? `${padding[0]} ${padding[1]}` : "0px"};
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
