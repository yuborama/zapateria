import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/config/apollo";
import GlobalStyles from "@Styles/globalStyled";
import { FC } from "react";
import ContextCarShop from "@Src/hooks/contextCarShop";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ContextCarShop>
        <GlobalStyles />
        <Component {...pageProps} />
      </ContextCarShop>
    </ApolloProvider>
  );
};

export default App;
