import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Overview({
  banner,
  title,
  overview,
  desc1,
  desc2,
  heading1,
  heading2,
}) {
  return (
    <div>
      <Image src={banner} alt="banner" fluid />
      <Container className="text-center">
        <Row>
          <Col sm={5} className="p-sm-5 p-2">
            <h1
              className="display-2 my-5"
              style={{
                fontFamily: "Prompt",
                textDecoration: "underline",
                textUnderlineOffset: "15px",
              }}
            >
              {title}
            </h1>
            <h2 className="display-4">{heading1}</h2>
            <p className="lead text-start" style={{ fontFamily: "Prompt" }}>
              {desc1}
            </p>
            <h2 className="display-4">{heading2}</h2>
            <p className="lead text-start" style={{ fontFamily: "Prompt" }}>
              {desc2}
            </p>
          </Col>
          <Col sm={7} className="p-5 my-auto">
            <Image src={overview} alt="banner" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
