import { SWRConfig } from "swr";
import Axios from "axios";

import "../styles/globals.css";
import Header from "../components/Header";

const fetcher = async (url) => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 4000,
      }}
    >
      <Header />
      <div className="flex justify-center pt-6 ">
        <div className="w-full max-w-2xl px-3 ">
          <Component {...pageProps} />
        </div>
      </div>
    </SWRConfig>
  );
}
