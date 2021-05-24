import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { FC, ComponentType, SVGProps } from "react";

type AtomIconProps = {
  icon?: string;
  size?: number;
  name?: string;
  zindex?: number;
  rotate?: number;
  width?: string;
};
const IconStyled = styled.div<AtomIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* position: absolute; */
  width: ${({ width }) => width || "100%"};
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    path {
      width: 100%;
    }
  }
  z-index: ${({ zindex }) => zindex || "auto"};
  transform: rotate(${({ rotate }) => rotate || "0"}deg);
  p {
    position: absolute;
    top: 30px;
    left: 25px;
  }
`;

const AtomIcon: FC<AtomIconProps> = (props) => {
  const { icon, children } = props;
  const DynamicIcon:
    | ComponentType<SVGProps<SVGSVGElement>>
    | undefined = dynamic(() => import(`../../../assets/icon/${icon}.svg`), {
    loading: () => <p>...</p>,
  });

  return (
    <IconStyled {...props}>
      <DynamicIcon />
      {children}
    </IconStyled>
  );
};

export default AtomIcon;
