import React from "react";
import "antd/dist/antd.css";
import { PageHeader } from "antd";

export default function Header() {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Checkout"
    />
  );
}
