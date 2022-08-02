import {Toaster} from "react-hot-toast";
import {RecoilRoot} from "recoil";
import PagesProtector from "../components/PagesProtector";
import Layout from "../components/ui/Layout";
import "../styles/globals.css";

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
      <RecoilRoot>
        {/*<SessionProvider session={session}>*/}
        <PagesProtector>
          <Toaster/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PagesProtector>
        {/*</SessionProvider>*/}
      </RecoilRoot>
  );
}

export default MyApp;
