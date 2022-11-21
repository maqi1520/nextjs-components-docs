import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="z-10 sticky w-full top-0">
        <div className="bg-white absolute inset-0 shadow-sm"></div>
        <div className="max-w-5xl mx-auto flex justify-between items-center relative z-10">
          <div className="flex-auto py-5">
            <Link
              className="text-xl font-semibold flex items-center"
              href={"/"}
            >
              <svg
                className="w-10 h-10 mr-2"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M512 341.33333336c0-94.4 76.8-171.2 171.2-171.2 94.4 0 171.2 76.8 171.2 171.2s-76.8 171.2-171.2 171.2C588.8 512.53333336 512 435.73333336 512 341.33333336z"
                  fill="#FF3C41"
                ></path>
                <path
                  d="M171.2 682.13333336c0-94.4 76.8-171.2 171.2-171.2H512v171.2C512 776.53333336 435.2 853.33333336 340.8 853.33333336s-169.6-76.8-169.6-171.2z"
                  fill="#0EBEFF"
                ></path>
                <path
                  d="M171.2 341.33333336c0 94.4 76.8 171.2 171.2 171.2H512V170.13333336H340.8c-94.4 0-169.6 76.8-169.6 171.2z"
                  fill="#FCD000"
                ></path>
                <text
                  fill="#000"
                  x="510"
                  y="830"
                  font-family="Verdana"
                  font-size="460"
                >
                  +
                </text>
              </svg>
              <span>NextJS Components</span>
            </Link>
          </div>
          <div className="flex-none flex items-center py-5 space-x-5 font-medium">
            <Link href={"/docs"}>文档</Link>
            <Link href={"/example"}>示例</Link>
            <Link href={"/blog"}>博客</Link>
            <input
              className="w-[200px] bg-gray-100 rounded p-3"
              placeholder="搜索文档"
            />
            <svg height="24" viewBox="2 2 20 20" fill="none" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="py-8 max-w-5xl mx-auto">{children}</div>
      <footer>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>狂奔滴小马</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">NextJS Components</Link>
          </div>
          <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              浙ICP备17007919号-1
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
