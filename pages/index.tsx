import React, { ReactElement } from "react";
import { Button } from "antd";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl text-center mx-auto space-y-10">
      <h1 className="text-center font-extrabold md:text-5xl mt-8">
        Next.js Components Docs
      </h1>
      <p className="mt-10 text-lg text-center mb-2 text-gray-600 md:!text-2xl">
        使用 Next.js 搭建 Monorepo 组件库文档
      </p>
      <div>
        <Link href="/docs/user-select">
          <Button type="primary" className="bg-blue-500" size="large">
            快速开始
          </Button>
        </Link>
      </div>
    </div>
  );
}
Page.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};
