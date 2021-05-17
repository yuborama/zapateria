import styled from "@emotion/styled";
import { FC } from "react";

type texttittleProps = {
  size?: string;
  color?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fweight?:"bold" |"normal"
};

const Component = styled.h1<texttittleProps>` 
  font-size: ${({ size }) => size || "44px"};
  color: ${({ color }) => color || "#3C3E42"};
  font-weight:${({fweight}) => fweight || "normal"} ;
`;

const AtomTextTittle: FC<texttittleProps> = (props) => {
  const { children } = props;
  return <Component {...props}> 
  {children || "Default Text"}
  </Component>;
};

export default AtomTextTittle;
