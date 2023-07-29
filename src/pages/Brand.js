import React from "react";
import Overview from "../components/Overview";
import { BrandOverview } from "../data/Overview-data";
import Quality from "../images/quality.png";
import { Button, Container, Form } from "react-bootstrap";
import Encase from "../images/Encase.png";
import Trade from "../images/Trade.png";

export default function Brand() {
  return (
    <div>
      <Overview
        title={BrandOverview.title}
        banner={BrandOverview.src1}
        overview={BrandOverview.src2}
        desc1={BrandOverview.desc1}
        desc2={BrandOverview.desc2}
      />

      {/* Quality  */}
      <img src={Quality} alt="" className="mw-100" />
      <Container className="py-5" style={{ fontFamily: "Prompt" }}>
        <p className="lead px-xl-5 pt-xl-5 fw-lighter position-relative">
          <span className="fw-bold">INCARNATION</span>
          <span
            style={{
              top: "-10px",
              position: "relative",
              fontSize: "16px",
            }}
          >
            ®
          </span>{" "}
          as a brand, the quality is the at most priority which is maintained at
          every step of production. We do pre- production quality control,
          in-production quality control and post-production quality control so
          that any fault in entire production process will be rectified or
          eliminated resulting a good quality product.
        </p>
        <p className="lead px-xl-5 fw-lighter position-relative">
          In Pre-production apparel quality control the inspection of fabric is
          done to meets the required standards for:
        </p>
        <p className="lead px-xl-5 fw-lighter position-relative">
          <ul>
            <li>Colorfastness properties</li>
            <li>Texture</li>
            <li>Technical properties</li>
            <li>Durability properties</li>
            <li>Detect any loose threads or holes on seams</li>
          </ul>
        </p>
        <p className="lead px-xl-5 fw-lighter position-relative">
          Choosing right thread, right elastics and buttons and maintaining the
          machines also done in pre production quality control.
        </p>
        <p className="lead px-xl-5 fw-lighter position-relative">
          In-production quality control is done by inspection during production
          which is integral to ensuring that garments are produced to meet
          customer expectations and specifications. These production garment
          inspections are typically done when around 15-20% of the merchandise
          has been completed, and they are done in different ways, including:
        </p>
        <p className="lead px-xl-5 fw-lighter position-relative">
          <ul>
            <li>
              Visual inspection (e.g., assessing cutting, assembling parts,
              sewing).
            </li>
            <li>Measurement.</li>
            <li>Destructive testing.</li>
          </ul>
        </p>
        <p className="lead px-xl-5 fw-lighter position-relative">
          Post-production Quality control of finished garments is done by
          inspection before the merchendise are shipped to the customer and is
          done when at least 80% of the order has been packed for shipping. This
          process helps to detect any defects and reduces the risk of complaints
          from customers.
        </p>
        <p className="lead px-xl-5 pb-xl-5 fw-lighter position-relative">
          The inspection process typically includes: visually inspecting the
          garment for any flaws visible to the human eye finished product,
          checking the labeling, and counting the items in the production lot.
        </p>
      </Container>

      {/* Packaging  */}
      <img src={Encase} alt="" className="mw-100" />
      <Container className="py-5" style={{ fontFamily: "Prompt" }}>
        <p className="lead  px-xl-5   fw-lighter position-relative">
          For the products under <span className="fw-bold">INCARNATION</span>
          <span
            style={{
              fontSize: "16px",
              top: "-10px",
              position: "relative",
            }}
          >
            ®
          </span>{" "}
          branding, we have our set of packaging standards. But these can be
          customized as per customer demand upto certain extent if that
          customization will not reduce the brand value. We use unit packing
          mostly with polythene covers. Shirts are packed in boxes after
          polythene cover. After unit packing a bulk of product is packed in
          cartons. We deliver carton boxed in local markets but for transport to
          far places we wrap them with water sealing layer. Multiple cartons are
          tied in big poly waterproof bags and sealed for transport. So our
          customers can remain assured for getting a damage free product in
          transport.
        </p>
      </Container>

      {/* Market And Trade */}
      <img src={Trade} alt="" className="mw-100" />
      <Container className="py-5" style={{ fontFamily: "Prompt" }}>
        <p className="lead px-xl-5 fw-lighter position-relative">
          As a brand <span className="fw-bold">INCARNATION</span>
          <span
            style={{
              fontSize: "16px",
              top: "-10px",
              position: "relative",
            }}
          >
            ®
          </span>{" "}
          all marketing and promotional activities are taken care of the company
          Aselus Enterprises. We have both digital and physical foot print over
          the market to attract our customers and end users. Our customer never
          worry for the product market acceptance . After all facts it is the
          quality which speaks itself. Our customer never face any issue in
          selling of the product. They get repeated order and has grown their
          business with us.
        </p>
      </Container>

      {/* Enquiry Form */}
      <Container className="justify-content-center text-center d-flex mb-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="lead" style={{ fontFamily: "Prompt" }}>
              Subscribe To Our News Letter
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted" style={{ fontFamily: "Prompt" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            className="rounded-pill px-4"
            type="submit"
            style={{ fontFamily: "Prompt", fontSize: "14px" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
