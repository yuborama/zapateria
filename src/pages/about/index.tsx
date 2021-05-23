import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomTextTittle from "@Src/components/atoms/AtomTextTittle";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import MoleculeNavigation from "@Src/components/molecules/MoleculeNavigation";
import { FC } from "react";

interface Props {}

const AboutPage: FC<Props> = () => {
  return (
    <>
   <MoleculeNavigation/>
    <AtomContainer flexDirection="column" padding="100px 80px">
      <AtomWrapper flexDirection="column" gap="16px" margin="100px 0px 66px 0px">
        <AtomTextTittle size="40px">¿QUIENES SOMOS?</AtomTextTittle>
        <AtomTextBody>
          Somos una empresa que se dedica a la venta de zapatos de manera
          virtual, podría decirse que tenemos pocos años en el mercado, pero
          destacamos por la calidad nuestro producto y nuestros precios
          económicos. Cada uno de los productos que nos llega, pasa por un
          proceso de selección que cumpla con una serie de características para
          brindarle al cliente un excelente calzado y que se sienta cómodo con
          este. Para nosotros es importante la opinión de nuestra clientela ya
          que nos ayuda a brindarles un mejor producto y saber las
          características del calzado que desea la comunidad.
        </AtomTextBody>
      </AtomWrapper>
      <AtomWrapper flexDirection="column" backgroudColor="#252628" padding="85px 0px 127px 0px" gap="16px" width="100%">
        <AtomTextTittle color="#FFFFFF">MISION</AtomTextTittle>
        <AtomTextBody color="#FFFFFF">
          Nuestra misión es brindar un calzado con el cual nuestros clientes se
          sientan cómodos y a la moda, buscando mejorar constantemente con el
          fin de dar el excelente servicio que se merece nuestra clientela.
        </AtomTextBody>
        <AtomTextTittle color="#FFFFFF">VISION</AtomTextTittle>
        <AtomTextBody color="#FFFFFF">
        Forevers19 tiene el propósito de conseguir calzado ampliamente deseado por el consumidor, siendo reconocida a nivel nacional e internacional como la mejor empresa en la industria de calzado deportivo por lo que estamos comprometidos con la calidad y eficiencia del producto teniendo un alto estándar en la comodidad de nuestros clientes.
        </AtomTextBody>
      </AtomWrapper>
      <AtomWrapper flexDirection="column" id="">
          <AtomTextTittle>
          OBJETIVOS CORPORATIVOS 
          </AtomTextTittle>
          <AtomTextBody>
              <ol>
                  <li>Producir empleo para los ciudadanos de nuestra región </li>
                  <li>Satisfacer las necesidades y expectativas de nuestros clientes</li>
                  <li>Contribuir con el crecimiento económico de la empresa </li>
                  <li>Ser reconocida por la calidad y eficiencia del calzado deportivo </li>
                  <li>Aumentar las ventas en los diferentes sectores del país Valores corporativos</li>
              </ol>
          </AtomTextBody>
      </AtomWrapper>
    </AtomContainer>
 </>
  );
};

export default AboutPage;
