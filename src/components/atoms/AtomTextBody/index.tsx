import styled from "@emotion/styled";
import { FC } from "react";

type textbodyProps = {
  size?: string;
  color?: string;
  opacity?: number;
};

const Component = styled.p<textbodyProps>` 
  margin: 0;
  font-size: ${({ size }) => size || "24px"};
  color: ${({ color }) => color || "#3C3E42"};
  opacity: ${({ opacity }) => opacity || 100};
`;

const AtomTextBody: FC<textbodyProps> = (props) => {
  const { children } = props;
  return <Component {...props}> 
  {children || "Default Text"}
  </Component>;
};

export default AtomTextBody;
