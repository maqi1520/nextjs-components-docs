import React from "react";
import { Select, SelectProps } from "antd";

const Option = Select.Option;

export default function UserSelect(props: SelectProps) {
  return (
    <Select {...props} style={{ width: 120 }}>
      <Option value="zhangsan">张三</Option>
      <Option value="lisi">李四</Option>
      <Option value="wangwu">王五</Option>
      <Option value="test">test</Option>
    </Select>
  );
}
