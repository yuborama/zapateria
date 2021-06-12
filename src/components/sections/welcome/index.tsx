import AtomButton from "@Src/components/atoms/AtomButton";
import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomTextTittle from "@Src/components/atoms/AtomTextTittle";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { FC } from "react";
import Link from "next/link";
import AtomToastNotication from "@Src/components/atoms/AtomToastNotification";
type SectionWelcomeProps = {};

const SectionWelcome: FC<SectionWelcomeProps> = () => {
  return (
    <>
      <AtomContainer
        flexDirection="row"
        backgroudColor="#252628"
        padding="20px 0 0 0"
        justifyContent="center"
        alignItems="center"
      >
        <AtomWrapper flexDirection="column" width="635px">
          <AtomTextTittle as="h1" size="36px" color="#FFFFFF" fontweight="700" margin="0 0 24px 0">
            El mejor lugar para encontrar el calzado que deseas.
          </AtomTextTittle>
          <AtomTextBody size="24px" color="#FFFFFF" opacity={0.77}>
            No importa la ocasión, en Forever_19 tenemos las mejores marcas del
            mercado para todos los gustos y edades.
          </AtomTextBody>
          <AtomWrapper margin="32px 0px 0px 0px">
            <Link href="/products">
              <AtomButton color="#38A6AD" hovercolor="#246e74"  padding="16px 20px">
                <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
                  Ver nuestros productos
                </AtomTextBody>
              </AtomButton>
            </Link>
            <Link href="#Contacto">
              <AtomButton
                color="#FFFFFF"
                outline
                hovercolor="#FFFFFF"
                texthover="#000000"
                padding="16px 32px"
                margin="0px 0px 0px 16px"
              >
                <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
                  Contacto
                </AtomTextBody>
              </AtomButton>
            </Link>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper width="647px">
          <AtomIcon icon="inicio" zindex={1} />
        </AtomWrapper>
      </AtomContainer>
    </>
  );
};

export default SectionWelcome;
