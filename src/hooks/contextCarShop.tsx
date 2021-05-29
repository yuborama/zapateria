import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

export interface ItemCarShopProps {
    image: string;
    preci: number;
    name: string;
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
