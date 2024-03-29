import styled from "@emotion/styled";
import { FC } from "react";

type texttittleProps = {
  size?: string;
  color?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontweight?: "400" |"500"|"700";
  margin?: string;
  padding?: string;
};

const Component = styled.h1<texttittleProps>` 
  font-family:  'Inter', sans-serif;
  font-size: ${({ size }) => size || "44px"};
  color: ${({ color }) => color || "#3C3E42"};
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  font-weight:${({fontweight}) => fontweight || "400"} ;
  line-height: 1.5;
`;

const AtomTextTittle: FC<texttittleProps> = (props) => {
  const { children } = props;
  return <Component {...props}> 
  {children || "Default Text"}
  </Component>;
};

export default AtomTextTittle;
