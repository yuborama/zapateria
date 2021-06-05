import type { AppProps } from "next/app";
import GlobalStyles from "@Styles/globalStyled";
import { ToastProvider } from "react-toast-notifications";
import { FC } from "react";
import ContextCarShop from "@Src/hooks/contextCarShop";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ToastProvider>
        <ContextCarShop>
          <GlobalStyles />
          <Component {...pageProps} />
        </ContextCarShop>
      </ToastProvider>
    </>
  );
};

export default App;
