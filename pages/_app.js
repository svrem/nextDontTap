import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
           <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6494444854881757"
     crossorigin="anonymous"></script>
        <meta
          name="Description"
          content="Game about click speed. Get as many points as you can with out touching the wite tiles!"
        />
        <meta
          name="google-site-verification"
          content="lubxIz_LGhY4WO7M8_2JPXvNX-ZN6ar49dfL6VzkU3s"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
