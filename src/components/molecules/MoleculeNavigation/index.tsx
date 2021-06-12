import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Linkstyled, Nav } from "./styled";
import AtomButton from "@Src/components/atoms/AtomButton";
import { useToasts } from "react-toast-notifications";
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
  }, []);
  const { addToast } = useToasts();
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
            <a>
              <AtomTextBody
                size="18px"
                color="#FFFFFF"
                fontweight="700"
                cursorPointer
              >
                Forever_19
              </AtomTextBody>
            </a>
          </Link>

          <Link href="/products">
            <a>
              <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
                Productos
              </AtomTextBody>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
                Nosotros
              </AtomTextBody>
            </a>
          </Link>
          <Link href="/#Contacto">
            <a>
              <AtomTextBody size="16px" color="#FFFFFF" cursorPointer>
                Contacto
              </AtomTextBody>
            </a>
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
            <AtomButton
              cursorPointer
              border="0"
              margin="0"
              padding="0"
              onClick={async () => {
                await navigator.clipboard.writeText("3219729519");
                addToast("Se ha copia el numero en el portapapeles", {
                  placement: "bottom-left",
                  appearance: "info",
                  autoDismiss: true,
                });
              }}
              color="#252628"
            >
              <AtomIcon icon="telefono" />
            </AtomButton>
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
