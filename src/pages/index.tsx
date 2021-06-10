import AtomButton from "@Src/components/atoms/AtomButton";
import AtomContainer from "@Src/components/atoms/AtomContainer";
import AtomTextBody from "@Src/components/atoms/AtomTextBody";
import AtomTextTittle from "@Src/components/atoms/AtomTextTittle";
import AtomWrapper from "@Src/components/atoms/AtomWrapper";
import MoleculeCard from "@Src/components/molecules/MoleculeCard";
import MoleculeNavigation from "@Src/components/molecules/MoleculeNavigation";
import SectionContact from "@Src/components/sections/contactus";
import SectionWelcome from "@Src/components/sections/welcome";
import GlobalStyles from "@Src/styles/globalStyled";
import Link from "next/link";

import { FC, useEffect, useState } from "react";

interface DataGetProps {
  id: string;
  image: string;
  name: string;
  collection: string;
  preci: number;
  discount?: number;
  sizes: string[];
}
type Data = {
  data: DataGetProps[];
  discount: DataGetProps[];
};

const index: FC = () => {

  return (
    <>
    <h1>Fuera de servicio</h1> 
    </>
  );
};

export default index;
