import "../styles/globals.css";
import type { AppProps } from "next/app";

import { MDXProvider } from "@mdx-js/react";
import DemoBlock from "components/DemoBlock";
import Layout from "components/Layout";

const components = {
  DemoBlock,
};

export default function App({ Component, pageProps }: AppProps & any) {
  return (
    <Layout>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <div className="prose mx-auto max-w-5xl">
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </div>
      )}
    </Layout>
  );
}
