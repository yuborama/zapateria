import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomImage from "@Src/components/atoms/AtomImage";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { FC, useState } from "react";
import { ItemListStyled } from "./styled";

type MoleculeItemListProps = {
  image: string;
  name: string;
  preci: number;
};

const MoleculeItemList: FC<MoleculeItemListProps> = (props) => {
  const [Cantidad, setCantidad] = useState(1);
  const { image, name, preci } = props;
  return (
    <ItemListStyled>
      <AtomImage image={image} width="136px" height="96px" />
      <AtomWrapper flexDirection="column" justifyContent="center" width="220px">
        <AtomTextBody size="16px" fontweight="Bold">
          {name}
        </AtomTextBody>
        <AtomTextBody size="14px" fontweight="Bold" color="red">
          $ {Intl.NumberFormat().format(preci)} COP
        </AtomTextBody>
      </AtomWrapper>
      <AtomWrapper flexDirection="column" width="18px">
        <button onClick={() => setCantidad(Cantidad + 1)}>
          <AtomIcon icon="up" />
        </button>
        <AtomTextBody>{Cantidad}</AtomTextBody>
        <button
          onClick={() => {
            if (Cantidad > 1) {
              setCantidad(Cantidad - 1);
            }
          }}
        >
          <AtomIcon icon="down" />
        </button>
      </AtomWrapper>
      <AtomTextBody size="21px" fontweight="Bold" color="red">
        {" "}
        $ {Intl.NumberFormat().format(preci * Cantidad)} COP
      </AtomTextBody>
    </ItemListStyled>
  );
};

export default MoleculeItemList;
