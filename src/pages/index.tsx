import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomTextTittle from "@Src/components/atoms/AtomTextTittle";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import MoleculeCard from "@Src/components/molecules/MoleculeCard";
import SectionWelcome from "@Src/components/sections/welcome";
import GlobalStyles from "@Src/styles/globalStyled";
import { FC } from "react";

interface Props {}

const index: FC<Props> = () => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
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
        <AtomTextBody size="24px" fontweight="Medium" margin="16px 245px 56px 245px">
        Las mejores marcas del mercado disponible para ti, al alcance de un click y con los mejores precios.
        </AtomTextBody>

        <AtomWrapper>
          <MoleculeCard
            image="https://res.cloudinary.com/yuborama/image/upload/v1621303862/zapateria/card1_m9rr7t.png"
            name="Sneaker patito azul Air 2021"
            collection="Master Craig edition"
            preci={250000}
            width="307px"
            margin="12px 10px"
          />

          <MoleculeCard
            image="https://res.cloudinary.com/yuborama/image/upload/v1621317723/zapateria/card2_chrzi6.png"
            name="Sneaker patito azul Air 2021"
            collection="Master Craig edition"
            preci={250000}
            width="307px"
            margin="12px 10px"
          />

          <MoleculeCard
            image="https://res.cloudinary.com/yuborama/image/upload/v1621317723/zapateria/card2_chrzi6.png"
            name="Sneaker patito azul Air 2021"
            collection="Master Craig edition"
            preci={250000}
            width="307px"
            margin="12px 10px"
          />

          <MoleculeCard
            image="https://res.cloudinary.com/yuborama/image/upload/v1621317723/zapateria/card2_chrzi6.png"
            name="Sneaker patito azul Air 2021"
            collection="Master Craig edition"
            preci={250000}
            width="307px"
            margin="12px 10px"
          />
        </AtomWrapper>
      </AtomContainer>
    </>
  );
};

export default index;
