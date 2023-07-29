import React from "react";
import Form from "react-bootstrap/Form";

import Overview from "../components/Overview";
import { ContactOverview } from "../data/Overview-data";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="position-relative ">
      <div className="mx-auto">
        <Overview
          title={ContactOverview.title}
          banner={ContactOverview.src1}
          overview={ContactOverview.src2}
          desc1={ContactOverview.desc1}
          desc2={ContactOverview.desc2}
        />
      </div>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
