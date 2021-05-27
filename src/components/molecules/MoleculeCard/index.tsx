import styled from "@emotion/styled";
import AtomButton from "@Src/components/atoms/AtomButton";
import AtomIcon from "@Src/components/atoms/AtomIcon";
import AtomImage from "@Src/components/atoms/AtomImage";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import { ContextCar } from "@Src/hooks/contextCarShop";
import { FC, useContext } from "react";

type MoleculeCardProps = {
  image: string;
  name: string;
  collection: string;
  preci: number;
  sizes?: string[];
  discount?: number;
  width?: string;
  margin?: string;
  padding?: string;
  heigth?: string;
};

const Card = styled.div<MoleculeCardProps>`
  position: relative;
  width: ${({ width }) => width || "100px"};
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
`;

const WrapperCardStyled = styled.div`
  position: relative;
  select {
    position: absolute;
    left: 8px;
    bottom: 15px;
    width: 106px;
    height: 31px;
    span {
      color: red;
    }
  }
`;
const Icon = styled(AtomIcon)`
  position: absolute;
  top: 0;
  right: 0;
`;

const MoleculeCard: FC<MoleculeCardProps> = (props) => {
  const {carShop,setCarShop} = useContext(ContextCar)
  const { image, name, collection, preci, discount, sizes } = props;
  return (
    <Card {...props}>
      <WrapperCardStyled>
        {discount && (
          <Icon icon="discount" rotate={-45} width="72px">
            <AtomTextBody size="10px" fontweight="Bold">
              {discount || 0}%
            </AtomTextBody>
          </Icon>
        )}
        {sizes ? (
          <>
            <AtomImage image={image} height="216px" />
            <select name="cars" id="cars">
              {sizes.map((e) => (
                <option value="">Talla {e}</option>
              ))}
            </select>
          </>
        ) : (
          <AtomImage image={image} height="216px" />
        )}
      </WrapperCardStyled>
      <AtomTextBody size="16px">{name}</AtomTextBody>
      <AtomTextBody color="#797B80" size="14px">
        {collection}
      </AtomTextBody>
      {discount ? (
        <AtomWrapper>
          <AtomTextBody
            size="14px"
            fontweight="Bold"
            margin="0px 10px 0px 0px"
            linethrough
          >
            $ {Intl.NumberFormat().format(preci)} COP
          </AtomTextBody>
          <AtomTextBody size="14px" fontweight="Bold" color="red">
            $ {Intl.NumberFormat().format(preci - preci * (discount / 100))} COP
          </AtomTextBody>
        </AtomWrapper>
      ) : (
        <AtomTextBody size="14px" fontweight="Bold">
          $ {Intl.NumberFormat().format(preci)} COP
        </AtomTextBody>
      )}
      {sizes && (
        <AtomButton onClick={()=> {
         const newCarShop = carShop;
         newCarShop.push({image,preci:discount? preci - preci * (discount / 100):preci,name})
         setCarShop(newCarShop)
        }} color="#38A6AD" padding="16px 20px">
          <AtomTextBody  size="16px" color="#FFFFFF">
            Añadir al carrito
          </AtomTextBody>
        </AtomButton>
      )}
    </Card>
  );
};

export default MoleculeCard;
