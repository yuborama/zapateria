import type { AppProps } from "next/app";
import GlobalStyles from "@Styles/globalStyled";
import { FC } from "react";
import ContextCarShop from "@Src/hooks/contextCarShop";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ContextCarShop>
        <GlobalStyles />
        <Component {...pageProps} />
      </ContextCarShop>
    </>
  );
};

export default App;
