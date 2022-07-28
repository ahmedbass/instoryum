import {SessionProvider} from "next-auth/react";
import {Toaster} from "react-hot-toast";
import {RecoilRoot} from "recoil";
import Layout from "../components/ui/Layout";
import "../styles/globals.css";

function MyApp({Component, pageProps: {session, ...pageProps}, router}) {
  return (
      <RecoilRoot>
        {/*<SessionProvider session={session}>*/}
        {/*<ProtectedPages router={router}>*/}
        <Toaster/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/*</ProtectedPages>*/}
        {/*</SessionProvider>*/}
      </RecoilRoot>
  );
}

export default MyApp;
