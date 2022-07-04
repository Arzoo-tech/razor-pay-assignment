import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import CheckoutForm from "./CheckoutForm";
import StaticSummary from "./StaticSummary";

export default function CheckoutScreen({values,setValues}) {
  return (
    <div className="mainscreen">
      <Row >
          <Col span={1}>
          </Col>
        <Col span={13}>
          <CheckoutForm values={values} setValues={setValues} />
        </Col>
        <Col span={1}>
        </Col>
        <Col span={8}>
          <StaticSummary />
        </Col>
        <Col span={1}>
        </Col>
      </Row>
    </div>
  );
}
