import styled from "@emotion/styled";
import AtomImage from "@Src/components/atoms/AtomImage";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import { FC } from "react";

type MoleculeCardProps = {
  image?: string;
  name?: string;
  collection?: string;
  preci?: number;
  width?: string;
  margin?: string;
  padding?: string;
  heigth?: string;
};

const Card = styled.div<MoleculeCardProps>`
  width: ${({ width }) => width || "100px"};
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
`;

const MoleculeCard: FC<MoleculeCardProps> = (props) => {
  const { image, name, collection, preci } = props;
  return (
    <Card {...props}>
      <AtomImage image={image} height="216px" />
      <AtomTextBody size="16px">{name}</AtomTextBody>
      <AtomTextBody color="#797B80" size="14px">
        {collection}
      </AtomTextBody>
      <AtomTextBody size="14px" fontweight="Bold">
        $ {Intl.NumberFormat().format(preci || 1000)} COP
      </AtomTextBody>
    </Card>
  );
};

export default MoleculeCard;
