import "../styles/globals.css";
import Layout from "../components/ui/Layout";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        {/*<ProtectedPages router={router}>*/}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/*</ProtectedPages>*/}
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
