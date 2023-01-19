import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:site_name" content="miniapp" />
        <meta property="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/x-icon" href="/myfavicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Readex+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-200 font-body dark:bg-zinc-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
