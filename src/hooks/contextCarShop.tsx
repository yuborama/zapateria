import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export interface ItemCarShopProps {
    id: string;
    image: string;
    preci: number;
    name: string;
    quanti: number;
  };

interface IContextProps {
    carShop: ItemCarShopProps[]
    setCarShop: Dispatch<SetStateAction<ItemCarShopProps[]>>
}

export const ContextCar = createContext({} as IContextProps);

const ContextCarShop: FC = ({ children }) => {
    const [carShop, setCarShop] = useState<ItemCarShopProps[]>([])
  return <ContextCar.Provider value={{carShop,setCarShop}}>{children}</ContextCar.Provider>;
};

export default ContextCarShop;
