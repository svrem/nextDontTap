import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="Description"
          content="Game about click speed. Get as many points as you can with out touching the wite tiles!"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
