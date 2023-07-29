import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiHomeOfficeFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <Container fluid="md">
        {/* footer header  */}
        <Row className="my-3">
          <Col>
            <Container className="mb-5">
              <h6 className="display-5 text-center">
                Thank you for visiting us.
              </h6>
            </Container>
          </Col>
        </Row>
        {/* footer content  */}
        <Row className="my-3">
          <Col sm={6} md={3}>
            <Container>
              <div
                className="mx-auto"
                style={{ listStyle: "none", justifyContent: "flex-start" }}
              >
                <p className="lead" style={{ fontFamily: "Prompt" }}>
                  Sitemap
                </p>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/profile"
                  >
                    Company Profile
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/brand"
                  >
                    Our Brand
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/services"
                  >
                    Service Provided
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/career"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </div>
            </Container>
          </Col>
          <Col sm={6} md={3}>
            <Container>
              <div style={{ listStyle: "none" }}>
                <p className="lead" style={{ fontFamily: "Prompt" }}>
                  Resources
                </p>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/fashion"
                  >
                    Fashion
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/trends"
                  >
                    Trends
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-body-secondary"
                    href="/new"
                  >
                    Coming soon
                  </a>
                </li>
              </div>
            </Container>
          </Col>
          <Col sm={6} md={3}>
            <Container>
              <div>
                <p className="lead" style={{ fontFamily: "Prompt" }}>
                  Corporate Office
                </p>

                <address className="d-flex gap-2">
                  <p>
                    <RiHomeOfficeFill />
                  </p>
                  Plot no. 192/944 (A), Ananta Vihar, <br />
                  Pokhariput, Bhubaneswar, Odisha. 751020
                </address>
                <div className="d-flex gap-2">
                  <BiSolidPhoneCall />

                  <p className="small" style={{ fontFamily: "Prompt" }}>
                    9348921991, 9348709280
                  </p>
                </div>
              </div>
            </Container>
          </Col>
          <Col sm={6} md={3}>
            <Container>
              <div>
                <p className="lead" style={{ fontFamily: "Prompt" }}>
                  Follow us
                </p>
                <div>
                  <TiSocialFacebook size={24} />
                  <TiSocialInstagram size={24} />
                  <TiSocialLinkedin size={24} />
                  <TiSocialYoutube size={24} />
                </div>
              </div>
            </Container>
          </Col>
        </Row>
        {/* footer footer  */}
        <Row className="my-3">
          <Col>
            <Container>
              <p className="lead text-center">
                &copy; {new Date().getFullYear()} Aselus Enterprises Pvt Ltd.
                All rights reserverd.
              </p>
              <p className="small text-center" style={{ fontFamily: "Prompt" }}>
                Designed & developed by{" "}
                <span style={{ fontFamily: "Paytone one" }}>
                  Subrat Kumar Behera
                </span>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
