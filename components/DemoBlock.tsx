import React, { useState } from "react";

const DemoBlock = ({ children }: any) => {
  const [visible, setVisible] = useState(false);
  console.log(children);

  return (
    <div className="demo-block">
      {children.map((child: any) => {
        if (child.type === "pre") {
          return (
            <div key={child.key}>
              <div
                className="demo-block-button"
                onClick={() => setVisible(!visible)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                {!visible ? "显示代码" : "收起代码"}
              </div>

              {visible && child}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
};

export default DemoBlock;
