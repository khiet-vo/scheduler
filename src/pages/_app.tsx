import { type FC } from 'react';
import Layout from './layout';
interface pageProps {}
interface myApp {
  Component: FC;
  pageProps: pageProps;
}

const MyApp: FC<myApp> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
