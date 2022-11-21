import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type MenuItem = {
  slug: string;
  name: string;
};

type Props = {
  data: MenuItem[];
};

export default function SideMenu({ data }: Props) {
  const router = useRouter();

  return (
    <div className="space-y-5 w-52 font-medium">
      {data.map((item) => {
        return (
          <div key={item.slug}>
            <Link
              className={
                (router.asPath == `/docs/${item.slug}`
                  ? "text-blue-500 bg-blue-100"
                  : "") + " p-3 rounded hover:bg-gray-50 block"
              }
              href={`/docs/${item.slug}`}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
