import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Miniapp - Page not found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="text-center">
        <h2 className="mb-6 text-6xl">404</h2>
        <p className="">sorry, this page not found</p>
      </div>
    </>
  );
}
