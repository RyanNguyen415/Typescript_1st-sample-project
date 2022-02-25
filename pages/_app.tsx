import type { AppProps } from "next/app";
import CarsProvider from "../context/CarsProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarsProvider>
      <Component {...pageProps} />
    </CarsProvider>
  );
}

export default MyApp;
