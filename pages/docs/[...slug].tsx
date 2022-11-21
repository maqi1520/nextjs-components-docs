import React, { useState } from "react";
import SideMenu from "components/SideMenu";
import {
  GetStaticPathsContext,
  InferGetServerSidePropsType,
  GetStaticPropsContext,
} from "next";
import dynamic from "next/dynamic";

const data = [
  { name: "用户选择", slug: "user-select" },
  { name: "登录弹窗", slug: "login" },
  { name: "工具函数", slug: "utils" },
];

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function Page({ slug }: Props) {
  const Content = dynamic(() => import(`packages/${slug}/docs/index.mdx`), {
    ssr: false,
  });

  return (
    <div className="flex gap-10">
      <SideMenu data={data} />
      <div className="prose flex-auto max-w-full">
        <Content />
      </div>
    </div>
  );
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  return {
    paths: data.map((item) => ({
      params: {
        slug: [item.slug],
      },
    })),
    fallback: false, // SSG 模式
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {
  const slug = params?.slug.join("/");

  return {
    props: {
      slug,
    }, // 传递给组件的props
  };
}
