import "../assets/css/pillar-1.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luca Provenzano | .NET Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
