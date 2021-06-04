import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Linkstyled, Nav } from "./styled";
type MoleculeNavigationPros = {};
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
          <Link href="/">
            <AtomTextBody size="18px" color="#FFFFFF" fontweight="Bold" cursorPointer>
              Forever_19
            </AtomTextBody>
          </Link>
          <Link href="/products">
            <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
              Productos
            </AtomTextBody>
          </Link>
          <Link href="/about">
            <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
              Nosotros
            </AtomTextBody>
          </Link>
          <Link href="/#Contacto">
            <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
              Contacto
            </AtomTextBody>
          </Link>
        </AtomWrapper>
        <AtomWrapper alignItems="center" justifyContent="flex-end" gap="24px">
          <AtomWrapper width="16px" height="16px">
            <a href="https://wa.me/573219729519" target="_blanck">
              <AtomIcon icon="whatsapp" />
            </a>
          </AtomWrapper>
          <AtomWrapper width="16px" height="16px">
            <a
              href="https://instagram.com/forevers19_?igshid=1c5mzd4ax9bjm"
              target="_blank"
            >
              <AtomIcon icon="instagram" />
            </a>
          </AtomWrapper>
          <AtomWrapper width="16px" height="16px">
            <AtomIcon icon="telefono" />
          </AtomWrapper>
          <AtomWrapper width="16px" height="16px">
            <a
              href="https://www.facebook.com/Forevers19_-103586351735804/?ti=as"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AtomIcon icon="facebook" />
            </a>
          </AtomWrapper>
        </AtomWrapper>
      </AtomContainer>
    </Nav>
  );
};

export default MoleculeNavigation;
