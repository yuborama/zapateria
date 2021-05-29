import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomInput from "@Src/components/atoms/AtomInput";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import MoleculeCard from "@Src/components/molecules/MoleculeCard";
import MoleculeCarShop from "@Src/components/molecules/MoleculeCarShop";
import MoleculeNavigation from "@Src/components/molecules/MoleculeNavigation";
import { FC, useEffect, useState } from "react";

interface DataGetProps {
  image: string;
  name: string;
  collection: string;
  preci: number;
  discount?: number;
  sizes: string[];
}
type Data = {
  data: DataGetProps[];
};

const Products: FC = () => {
  const [Data, setData] = useState<Data>({ data: [] });
  const [seacrh, setseacrh] = useState("");
  const [productsShow, setProductsShow] = useState<DataGetProps[]>([]);
  useEffect(() => {
    const DataFake = async () => {
      const data: DataGetProps[] = await fetch("/Data.json")
        .then((response) => response.json())
        .then((data) => data);
      setData({
        data: data,
      });
    };
    DataFake();
  }, []);

  useEffect(() => {
    console.log(seacrh);
    setProductsShow(
      Data.data.filter((e) =>
        e.name.toLocaleLowerCase().includes(seacrh.toLocaleLowerCase())
      )
    );
  }, [seacrh]);
  return (
    <>
      <MoleculeNavigation />
      <AtomContainer
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="91px 79px 40px 79px"
      >
        <AtomWrapper justifyContent="space-between">
          <AtomInput
            placeholder="Buscar"
            backgroundcolor="#E2E0E0"
            onChange={(e) => {
              setseacrh(e.target.value);
            }}
          />
          <MoleculeCarShop />
        </AtomWrapper>
        {seacrh !== "" && productsShow.length == 0 ? (
          <AtomTextBody>El producto que busca no se encuentra</AtomTextBody>
        ) : (
          <AtomWrapper display="grid" columns={4}>
            {seacrh === ""
              ? Data.data.map((e) => (
                  <MoleculeCard
                    image={e.image}
                    name={e.name}
                    collection={e.collection}
                    preci={e.preci}
                    width="307px"
                    margin="12px 10px"
                    discount={e.discount}
                    sizes={e.sizes}
                  />
                ))
              : productsShow.map((e) => (
                  <MoleculeCard
                    image={e.image}
                    name={e.name}
                    collection={e.collection}
                    preci={e.preci}
                    width="307px"
                    margin="12px 10px"
                    discount={e.discount}
                    sizes={e.sizes}
                  />
                ))}
          </AtomWrapper>
        )}
      </AtomContainer>
    </>
  );
};

export default Products;
