import styled from "@emotion/styled";
import { FC } from "react";

type ImageProps = {
  image?: string;
  circle?: boolean;
  alt?: string;
  width?: string;
  height?: string;
};

const ImageStyled = styled.div<ImageProps>`
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};
  border-radius: ${({ circle }) => (circle ? "50%" : "0%")};
  img {
    width: 100%;
    height: 100%;
  }
`;

const AtomImage: FC<ImageProps> = (props) => {
  const { image, alt } = props;
  return (
    <ImageStyled {...props}>
      <img src={image} alt={alt || "image"} />
    </ImageStyled>
  );
};

export default AtomImage;
