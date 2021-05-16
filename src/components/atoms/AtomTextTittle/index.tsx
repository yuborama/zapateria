import styled from "@emotion/styled";
import { FC } from "react";

type texttittleProps = {
  size?: string;
  color?: "black" | "white";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const AtomTextTittleProps = `

`;


const Component = styled.div<texttittleProps>` 
`;

const AtomTextTittle: FC<texttittleProps> = (props) => {
  const { children } = props;
  return <Component {...props}> 
  {children || "Default Text"}
  </Component>;
};

export default AtomTextTittle;
