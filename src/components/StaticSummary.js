import React from 'react';
import "antd/dist/antd.css";
import { Space, Typography} from "antd";
import { Col, Row } from "antd";

export default function StaticSummary() {
  const { Title } = Typography;
  const{Total}=Typography;
  return (
  <div className="grid-container">
    <div className="order-summary">Order Summary</div>
    <div className="total-items" >Total Items:</div>
    <div className="t-i" >2</div>
    <div className="sub-total">Sub Total:</div>
    <div className="s-t" >600</div>
  </div>
  )
}