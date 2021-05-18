import styled from "@emotion/styled";
import { FC } from "react";

type AtomContainerProps = {
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

const Container = styled.section<AtomContainerProps>`
  max-width: 1440px;
  height: 100%;
  display: flex;
  margin: ${({ margin }) => (margin ? `${margin[0]} ${margin[1]}` : "0px 0px")};
  padding: ${({ padding }) => padding ? `${padding[0]} ${padding[1]}` : "0px"};
  ${({ fullwidth }) => fullwidth && { width: "100%" }}
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  background-color: ${({ backgroudColor }) => backgroudColor || "transparent"}; 
`;

const AtomContainer: FC<AtomContainerProps> = (props) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

export default AtomContainer;
