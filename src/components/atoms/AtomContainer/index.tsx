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
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  backgroudColor?: string;
  margin?: string;
  padding?: string;
};

const Container = styled.section<AtomContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  margin: ${({ margin }) => (margin || "0px")};
  padding: ${({ padding }) => padding ||"0px"};
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
