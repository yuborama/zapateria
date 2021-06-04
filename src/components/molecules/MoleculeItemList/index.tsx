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
};

const MoleculeItemList: FC<MoleculeItemListProps> = (props) => {
  const { carShop, setCarShop } = useContext(ContextCar);
  const { id, image, name, preci, quanti } = props;
  const [Cantidad, setCantidad] = useState(quanti);
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
          <AtomIcon icon="up" />
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
      <button onClick={()=>{
        const newCarShop = carShop.filter((item) => item.id != id);
        setCarShop(newCarShop);
      }}>X</button>
    </ItemListStyled>
  );
};

export default MoleculeItemList;
