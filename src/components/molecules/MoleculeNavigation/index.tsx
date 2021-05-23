import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { FC, useEffect, useState } from "react";
import { Linkstyled, Nav } from "./styled";
type MoleculeNavigationPros = {};
// const [scrollY, setScrollY] = useState(false);
const scrollToUp = () => {
  document.body.scrollTo({
    top: 0,
    left: 0,
    behavior: `smooth`,
  });
};
const MoleculeNavigation: FC<MoleculeNavigationPros> = (props) => {
  useEffect(() => {
    scrollToUp();
    console.log("hola, willy puto");
  }, []);

  const { children } = props;
  return (
    <Nav>
      <AtomContainer
        padding="0px 80px"
        backgroudColor="#252628"
        alignItems="center"
      >
        <AtomWrapper height="85px" alignItems="center" gap="24px">
          <Linkstyled href="/">
              <AtomTextBody size="18px" color="#FFFFFF" fontweight="Bold" cursorPointer>
                Forever_19
              </AtomTextBody>
          </Linkstyled>
          <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
            Productos
          </AtomTextBody>
          <Linkstyled href="/about">
            <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
              Nosotros
            </AtomTextBody>
          </Linkstyled>
          <Linkstyled href="/#Contacto">
              <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
                Contacto
              </AtomTextBody>
          </Linkstyled>
        </AtomWrapper>
        <AtomWrapper alignItems="center" justifyContent="flex-end" gap="24px">
          <AtomWrapper width="16px" height="16px">
            <AtomIcon icon="whatsapp" />
          </AtomWrapper>
          <AtomWrapper width="16px" height="16px">
            <AtomIcon icon="instagram" />
          </AtomWrapper>
          <AtomWrapper width="16px" height="16px">
            <AtomIcon icon="telefono" />
          </AtomWrapper>
          <AtomWrapper width="16px" height="16px">
            <AtomIcon icon="facebook" />
          </AtomWrapper>
        </AtomWrapper>
      </AtomContainer>
    </Nav>
  );
};

export default MoleculeNavigation;
