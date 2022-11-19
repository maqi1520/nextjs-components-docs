import React, { useState } from "react";
import {
  GetStaticPathsContext,
  InferGetServerSidePropsType,
  GetStaticPropsContext
} from "next";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import DemoBlock from "components/DemoBlock";

const components = {
  DemoBlock
};

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function Page({ slug }: Props) {
  const Content = dynamic(() => import(`packages/${slug}/docs/index.mdx`), {
    ssr: false
  });

  return (
    <div>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
    </div>
  );
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return {
    paths: [
      { params: { slug: ["login"] } },
      { params: { slug: ["user-select"] } }
    ],
    fallback: false // SSG 模式
  };
}

export async function getStaticProps({
  params
}: GetStaticPropsContext<{ slug: string[] }>) {
  const slug = params?.slug.join("/");

  return {
    props: {
      slug
    } // 传递给组件的props
  };
}
