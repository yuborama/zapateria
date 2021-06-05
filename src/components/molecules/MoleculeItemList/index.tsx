import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomImage from "@Src/components/atoms/AtomImage";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { ContextCar } from "@Src/hooks/contextCarShop";
import { FC, useContext, useState } from "react";
import { ItemListStyled } from "./styled";

type MoleculeItemListProps = {
  id: string;
  image: string;
  name: string;
  preci: number;
  quanti: number;
  size: string;
};

const MoleculeItemList: FC<MoleculeItemListProps> = (props) => {
  const { carShop, setCarShop } = useContext(ContextCar);
  const { id, image, name, preci, quanti, size } = props;
  const [Cantidad, setCantidad] = useState(quanti);
  return (
    <ItemListStyled>
      <AtomImage image={image} width="136px" height="96px" />
      <AtomWrapper flexDirection="column" justifyContent="center" width="220px">
        <AtomTextBody size="16px" fontweight="Bold">
          {name}
        </AtomTextBody>
        <AtomWrapper gap=".3rem">
          <AtomTextBody size="14px" fontweight="Bold" color="red">
            $ {Intl.NumberFormat().format(preci)} COP
          </AtomTextBody>
          <AtomTextBody size="14px" fontweight="Bold" color="#0000000">
            Talla {size}
          </AtomTextBody>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper gap=".5rem" width="auto" alignItems="center">
        <AtomWrapper flexDirection="column" width="auto" alignItems="center">

          <button
            onClick={() => {
              const newCarShop = carShop;
              newCarShop.forEach((item) => {
                if (item.id == id) {
                  item.quanti++;
                  setCantidad(item.quanti);
                }
              });
            }}
          >
            <AtomIcon icon="up" size={5}/>
          </button>
          <AtomTextBody>{Cantidad}</AtomTextBody>
          <button
            onClick={() => {
              if (Cantidad > 1) {
                const newCarShop = carShop;
                newCarShop.forEach((item) => {
                  if (item.id == id) {
                    item.quanti--;
                    setCantidad(item.quanti);
                  }
                });
              }
            }}
          >
            <AtomIcon icon="down" />
          </button>
        </AtomWrapper>
        <AtomTextBody size="21px" fontweight="Bold" color="red">
          $ {Intl.NumberFormat().format(preci * Cantidad)} COP
        </AtomTextBody>
      </AtomWrapper>

      <button
        onClick={() => {
          const newCarShop = carShop.filter((item) => item.id != id);
          setCarShop(newCarShop);
        }}
      >
        X
      </button>
    </ItemListStyled>
  );
};

export default MoleculeItemList;
