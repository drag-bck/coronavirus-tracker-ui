import React from "react";
import { Card, Row, Col } from "antd";
import { isMobile } from "react-device-detect";
import { addComma } from "./../../utils";
import "./Summary.scss";

const Summary = (props) => {
  const confirmed = props?.data?.confirmed || 0;
  const active = props?.data?.active || 0;
  const recovered = props?.data?.recovered || 0;
  const deceased = props?.data?.deceased || 0;
  return (
    <div className="summary">
      <Row gutter={[16, 16]}>
        <Col span={isMobile ? 12 : 6}>
          <Card
            hoverable={true}
            className="p8"
            style={{ backgroundColor: "#ff073a", color: "white" }}
          >
            <p className="fw-800 fs-20">{addComma(confirmed)}</p>
            <p>Confirmed</p>
          </Card>
        </Col>
        <Col span={isMobile ? 12 : 6}>
          <Card
            hoverable={true}
            className="p8"
            style={{ backgroundColor: "#007bff", color: "white" }}
          >
            <p className="fw-800 fs-20">{addComma(active)}</p>
            <p>Active</p>
          </Card>
        </Col>
        <Col span={isMobile ? 12 : 6}>
          <Card
            hoverable={true}
            className="p8"
            style={{ backgroundColor: "#28a745", color: "white" }}
          >
            <p className="fw-800 fs-20">{addComma(recovered)}</p>
            <p>Recovered</p>
          </Card>
        </Col>
        <Col span={isMobile ? 12 : 6}>
          <Card
            hoverable={true}
            className="p8"
            style={{ backgroundColor: "#6c757d", color: "white" }}
          >
            <p className="fw-800 fs-20">{addComma(deceased)}</p>
            <p>Deceased</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Summary;
