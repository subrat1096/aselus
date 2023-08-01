import React from "react";
import { Button, Card, Container, Carousel, Row, Col } from "react-bootstrap";

import { HomeCarousel } from "../data/Carousel-data";
import { FeatureCard } from "../data/FeatureCard";
import bg from "../images/background.png";
import featureBgOverlay from "../images/brand banner.png";
import { Link } from "react-router-dom";
import featureBg from "../images/Feature-bg.png";

export default function Home() {
  return (
    <div>
      {/* Carousel Slider  */}

      <Carousel fade>
        {HomeCarousel.map((image, index) => {
          return (
            <Carousel.Item interval={3000} key={index + image.title}>
              <img src={image.src} alt={image.alt} className="mw-100" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      {/* A breif about  */}

      <Container className="my-lg-5 p-lg-5 my-5  mx-auto p-3">
        <div className="float-sm-end mx-auto w-50 d-none d-sm-block ms-sm-5 mb-5">
          <img
            src={bg}
            alt=""
            style={{
              boxShadow: "0px 0px 60px #8C6A04",
            }}
            className="w-100"
          />
        </div>
        <div className="d-sm-none mb-5 position-relative">
          <img
            src={bg}
            alt=""
            style={{
              boxShadow: "0px 0px 60px #8C6A04",
            }}
            className="w-100"
          />
          <div
            className="position-absolute translate-middle"
            style={{ bottom: "10%", left: "50%" }}
          >
            <h1
              className="h1"
              style={{
                color: "#A0834E",
                fontSize: "2.5rem",
              }}
            >
              Who We Are?
            </h1>
          </div>
        </div>
        <h2
          style={{
            fontFamily: "Paytone One",
            textTransform: "capitalize",
            color: "#26211F",
            marginBottom: "20px",
          }}
        >
          We are clothing manufacturer for the brands that wants to stand out.
        </h2>

        <p
          style={{
            fontFamily: "Prompt",
          }}
        >
          We, Aselus Enterprises Pvt. Ltd., are recognized among the industry
          leading top garments manufacturers and suppliers of high quality
          apparel and accessories for men, women and children in India. We carry
          out all our manufacturing processes in-house and have emerged as the
          ultimate destination for all kinds of clothing and customized needs at
          competitive prices on bulk buying.
        </p>
        <p
          style={{
            fontFamily: "Prompt",
          }}
        >
          Working with a team of highly passionate and creative designers and
          having access to modern manufacturing equipment and facilities, we are
          at a favorable position to offer customers with all-inclusive OEM and
          private label clothing services.
        </p>
      </Container>

      {/* Feature Title  */}

      <hr className="mx-auto" style={{ marginBottom: "64px", width: "90%" }} />
      <div className="d-none d-lg-block">
        <Container fluid>
          <Card className="bg-dark text-white ">
            <Card.Img src={featureBg} alt="Card image" />
            <Card.ImgOverlay className=" d-flex align-items-center justify-content-center flex-column">
              <Card.Title>
                <h1
                  className="display-2"
                  style={{
                    fontFamily: "Prompt",
                    letterSpacing: "5px",
                    fontWeight: "bolder",
                  }}
                >
                  INCARNATION
                  <span
                    style={{
                      position: "relative",
                      top: -40,
                      fontSize: "36px",
                      fontWeight: "normal",
                    }}
                  >
                    &#174;
                  </span>
                </h1>
              </Card.Title>
              <Card.Text>
                <p className="lead" style={{ fontFamily: "Prompt" }}>
                  Aselus enterprises &#8208; the very name of our company as
                  recognized in India as best apparel manufacturer, & top
                  garments manufacturer. We are a clothing company having our
                  own Production unit and also having our own in-house garments
                  brand INCARNATION.
                </p>
              </Card.Text>
              <Link to="/brand">
                <Button
                  variant="primary"
                  className="rounded-pill"
                  style={{
                    fontFamily: "Prompt",
                    padding: "10px 30px",
                    fontSize: "18px",
                  }}
                >
                  INCARNATION
                </Button>
              </Link>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
      <div className="d-lg-none d-block text-center">
        <p
          className="lead text-center text-decoration-underline"
          style={{ textUnderlineOffset: "5px" }}
        >
          Featured Brand
        </p>
        <img src={featureBgOverlay} alt="" className="mw-100 mb-3" />
      </div>

      <hr className="mx-auto" style={{ marginTop: "64px", width: "90%" }} />
      {/* Feature Card  */}

      <Container className="my-5 p-5 ">
        <Row></Row>
        <Row>
          {FeatureCard.map((item, index) => (
            <Col sm={6} lg={3}>
              <Container className="m-3 mx-auto" style={{ height: "545px" }}>
                <Card
                  key={index + item.title}
                  style={{
                    height: "100%",
                    background: "transparent",
                    border: "none",
                  }}
                  className="shadow bg-body-tertiary rounded-5 p-1"
                >
                  <Card.Img
                    variant="top"
                    src={item.src}
                    className="mw-100 rounded-5"
                  />

                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
