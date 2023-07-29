import React from "react";
import Overview from "../components/Overview";
import { ServiceOverview } from "../data/Overview-data";
import { Col, Container, Row } from "react-bootstrap";
import Facility from "../images/Facility.png";

export default function Services() {
  return (
    <div>
      <Overview
        title={ServiceOverview.title}
        banner={ServiceOverview.src1}
        desc1={ServiceOverview.desc1}
        desc2={ServiceOverview.desc2}
        overview={ServiceOverview.src2}
      />
      <div>
        <img src={Facility} alt="" className="w-100" />
        <Container className="my-5 mx-auto" style={{ fontFamily: "Prompt" }}>
          <h2 className="display-2">Facilties</h2>
          <Row>
            <Col sm={6}>
              <Container className="px-sm-5 ">
                <p className="lead">Sample Development</p>
                <p className="lead">Cutting</p>
                <p className="lead">Fusing</p>
                <p className="lead">Sewing</p>
                <p className="lead">Feed off arm sewing</p>
                <p className="lead">Over lock</p>
              </Container>
            </Col>
            <Col sm={6}>
              <Container className="px-sm-5 ">
                <p className="lead">Cover stitch</p>
                <p className="lead">Chain stitch</p>
                <p className="lead">Button hole</p>
                <p className="lead">Button sewing</p>
                <p className="lead">Finishing</p>
                <p className="lead">Packing</p>
              </Container>
            </Col>
          </Row>
          <p className="lead">
            Using above facilities a new comer in market with desire to lunch a
            brand or a established brand who want to run a pilot product with
            3000 to 5000 pieces per month can be easily produced. We can handle
            all regular use fabrics of both woven and knit category.{" "}
          </p>
          <h2 className="display-2">Production</h2>
          <p className="lead">
            Aselus enterprises with its production facility can produce anything
            which need to be stitched. We have to capacity to produce simple
            nighty to medical hazmat suits. A bouquet of products have already
            produced like shirts, trousers, aprons, school uniforms, college
            uniforms, kurtis, shorts, lenengas, blouse, petticoat, t shirts,
            Bermudas, boxers, leggings. Even at time of corona we have made
            Hazmat suit , corona PPE kit, mask, head covers for our customers.{" "}
          </p>
        </Container>
      </div>
    </div>
  );
}
