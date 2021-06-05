import styled from "@emotion/styled";
import { FC } from "react";

type ButtonProps = {
  color?: string;
  outline?: boolean;
  padding?: string;
  link?: string;
  href?: string;
  margin?: string;
  hovercolor?: string;
  onClick?: () => void;
  type?: "submit" | "button";
};

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({ outline, color }) =>
    outline ? "transparent" : color};
  padding: ${({ padding }) => padding || "3px"};
  margin: ${({ margin }) => margin || "0px"};
  border: 1px solid ${({ color }) => color || "black"};
  &:hover {
    background-color: ${({ outline, color, hovercolor }) =>
      outline ? hovercolor || color : hovercolor || "transparent"};
  }
`;

const AtomButton: FC<ButtonProps> = (props) => {
  const { children, href } = props;
  return href ? (
    <ButtonStyled {...props}>{children || "Default Text"}</ButtonStyled>
  ) : (
    <ButtonStyled {...props}>{children || "Default Text"}</ButtonStyled>
  );
};

export default AtomButton;
