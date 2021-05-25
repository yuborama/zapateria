import AtomButton from "@Src/components/atoms/AtomButton";
import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomTextTittle from "@Src/components/atoms/AtomTextTittle";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import MoleculeCard from "@Src/components/molecules/MoleculeCard";
import MoleculeNavigation from "@Src/components/molecules/MoleculeNavigation";
import SectionWelcome from "@Src/components/sections/welcome";
import GlobalStyles from "@Src/styles/globalStyled";

import { FC, useEffect, useState } from "react";

interface DataGetProps {
  image: string;
  name: string;
  collection: string;
  preci: number;
  discount?: number;
  sizes: string[];
}
type Data={
  data:DataGetProps[],
  discount:DataGetProps[]
}

const index: FC = () => {
  const [Data, setData] = useState<Data>({data:[],discount:[]});
  useEffect(() => {
    const DataFake = async () => {
      const data: DataGetProps[] = await fetch("/Data.json")
        .then((response) => response.json())
        .then((data) => data);
      setData({
        data: data.filter((e) => !e.discount),
        discount: data.filter((e) => e.discount),
      });
    };
    DataFake();
  }, []);
  console.log(Data);
  return (
    <>
      <MoleculeNavigation></MoleculeNavigation>
      <SectionWelcome />
      <AtomContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="91px 79px 40px 79px"
      >
        <AtomTextTittle as="h2" size="40px" fontweight="Bold">
          Productos
        </AtomTextTittle>
        <AtomTextBody
          size="24px"
          fontweight="Medium"
          margin="16px 245px 56px 245px"
        >
          Las mejores marcas del mercado disponible para ti, al alcance de un
          click y con los mejores precios.
        </AtomTextBody>
        <AtomWrapper display="grid" columns={4}>
          {Data.data.map((e) => (
            <MoleculeCard
              image={e.image}
              name={e.name}
              collection={e.collection}
              preci={e.preci}
              width="307px"
              margin="12px 10px"
            />
          ))}
          {Data.discount.map((e) => (
            <MoleculeCard
              image={e.image}
              name={e.name}
              collection={e.collection}
              preci={e.preci}
              width="307px"
              margin="12px 10px"
              discount={e.discount}
            />
          ))}
        </AtomWrapper>
        <AtomButton color="#38A6AD" padding="16px 20px">
          <AtomTextBody size="16px" color="#FFFFFF">
            Ver productos
          </AtomTextBody>
        </AtomButton>
      </AtomContainer>
      <AtomContainer>
        <AtomWrapper
          height="300px"
          backgroudColor="#252628"
          id="Contacto"
        ></AtomWrapper>
      </AtomContainer>
    </>
  );
};

export default index;
