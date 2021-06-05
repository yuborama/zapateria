import AtomButton from "@Src/components/atoms/AtomButton";
import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { ContextCar, ItemCarShopProps } from "@Src/hooks/contextCarShop";
import {
  Dispatch,
  FC,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MoleculeItemList from "../MoleculeItemList";
import { ListDropdowStyled } from "./styled";
import { useToasts } from "react-toast-notifications";

const stylebutton = {
  with: "85px",
  cursor: "pointer",
  background: "none",
  border: "none",
};
type MoleculeCarShopProps = {};

function useOutsideAlerter(
  ref: RefObject<HTMLDivElement>,
  settoggle: Dispatch<boolean>
) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        settoggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, settoggle]);
}

const MoleculeCarShop: FC<MoleculeCarShopProps> = () => {
  const [Dropdown, setDropdown] = useState(false);
  const { carShop, setCarShop } = useContext(ContextCar);
  const { addToast } = useToasts();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDropdown);
  const [carshow, setcarshow] = useState<ItemCarShopProps[]>([]);
  useEffect(() => {
    setcarshow(carShop);
  }, [carShop]);

  return (
    <>
      <AtomWrapper width="auto">
        {/* <AtomButton>
          <AtomIcon icon="carshop"  width="85px"/>
        </AtomButton> */}
        <button
          ref={wrapperRef}
          onClick={() => setDropdown(!Dropdown)}
          style={stylebutton}
        >
          <AtomIcon icon="carshop" />
        </button>
      </AtomWrapper>
      {Dropdown && (
        <ListDropdowStyled ref={wrapperRef}>
          {carshow.length === 0 ? (
            <AtomWrapper
              padding="30px 0px"
              backgroudColor="#E2E0E0"
              justifyContent="center"
              alignItems="center"
            >
              <AtomTextBody>No hay productos en el carrito</AtomTextBody>
            </AtomWrapper>
          ) : (
            <AtomWrapper
              flexDirection="column"
              backgroudColor="#E2E0E0"
              alignItems="center"
            >
              {carshow.map((e) => (
                <MoleculeItemList
                  key={e.id + e.size}
                  size={e.size}
                  quanti={e.quanti}
                  id={e.id}
                  image={e.image}
                  preci={e.preci}
                  name={e.name}
                />
              ))}
              <AtomButton
                margin="10px"
                color="#38A6AD"
                hovercolor="#184447"
                padding="16px 20px"
                onClick={() => {
                  addToast(
                    "Felicidades su compra se ha realizado satisfactoriamente",
                    {
                      appearance: "success",
                      autoDismiss: true,
                    }
                  );
                  setCarShop([]);
                }}
              >
                <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
                  Realizar compra
                </AtomTextBody>
              </AtomButton>
            </AtomWrapper>
          )}
        </ListDropdowStyled>
      )}
    </>
  );
};

export default MoleculeCarShop;
