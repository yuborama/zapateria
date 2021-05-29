import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { ContextCar, ItemCarShopProps } from "@Src/hooks/contextCarShop";
import { FC, useContext, useEffect, useState } from "react";
import MoleculeItemList from "../MoleculeItemList";
import { ListDropdowStyled } from "./styled";

type MoleculeCarShopProps = {};

const MoleculeCarShop: FC<MoleculeCarShopProps> = () => {
  const [Dropdown, setDropdown] = useState(false);
  const { carShop, setCarShop } = useContext(ContextCar);
  const [carshow, setcarshow] = useState<ItemCarShopProps[]>([]);
  useEffect(() => {
    setcarshow(carShop);
  }, [carShop]);

  return (
    <>
      <AtomWrapper width="200px">
        <button onClick={() => setDropdown(!Dropdown)}>
          <AtomIcon icon="carshop" />
        </button>
      </AtomWrapper>
      {Dropdown && (
        <ListDropdowStyled>
          {carshow.length === 0 ? (
            <AtomWrapper backgroudColor="#E2E0E0" justifyContent="center" alignItems="center">
              <AtomTextBody>No hay productos en el carrito</AtomTextBody>
            </AtomWrapper>
          ) : (
            carshow.map((e) => (
              <MoleculeItemList image={e.image} preci={e.preci} name={e.name} />
            ))
          )}
        </ListDropdowStyled>
      )}
    </>
  );
};

export default MoleculeCarShop;
