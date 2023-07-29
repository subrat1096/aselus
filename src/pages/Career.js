import React from "react";
// import { Container } from "react-bootstrap";

import Overview from "../components/Overview";

import { CareerOverview } from "../data/Overview-data";

export default function Career() {
  return (
    <div>
      <Overview
        title={CareerOverview.title}
        banner={CareerOverview.src1}
        overview={CareerOverview.src2}
        heading1={CareerOverview.heading1}
        heading2={CareerOverview.heading2}
        desc1={CareerOverview.desc1}
        desc2={CareerOverview.desc2}
      />

      {/* <h3 className="display-4"></h3>
      <p className="lead">
        
      </p>

      <h3 className="display-4"></h3>
      <p className="lead">
        
      </p> */}
    </div>
  );
}
