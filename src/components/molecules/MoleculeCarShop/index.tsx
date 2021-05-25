import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { FC, useState } from "react";
import MoleculeItemList from "../MoleculeItemList";
import { ListDropdowStyled } from "./Styled";

type MoleculeCarShopProps = {};

const MoleculeCarShop: FC<MoleculeCarShopProps> = () => {
  const [Dropdown, setDropdown] = useState(false);
  return (
    <>
      <AtomWrapper>
        <button onClick={() => setDropdown(!Dropdown)}>
          <AtomIcon icon="carshop" />
        </button>
      </AtomWrapper>
      {Dropdown && (
        <ListDropdowStyled>
          <MoleculeItemList
            image="https://res.cloudinary.com/yuborama/image/upload/v1621303862/zapateria/card1_m9rr7t.png"
            preci={15000}
            name="Sneaker patito azul Air 2021"
          />
          <MoleculeItemList
            image="https://res.cloudinary.com/yuborama/image/upload/v1621303862/zapateria/card1_m9rr7t.png"
            preci={25000}
            name="Sneaker patito azul Air 2021"
          />
          <MoleculeItemList
            image="https://res.cloudinary.com/yuborama/image/upload/v1621303862/zapateria/card1_m9rr7t.png"
            preci={10000}
            name="Sneaker patito azul Air 2021"
          />
        </ListDropdowStyled>
      )}
    </>
  );
};

export default MoleculeCarShop;
