import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHistory, FaIndustry } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

import Overview from "../components/Overview";

import { History } from "../data/History";
import { CompanyOverview } from "../data/Overview-data";
export default function Company() {
  // let historyIconStyles = { background: "#BD9F69" };
  // let technologyIconStyles = { background: "#BF863F" };
  // let opportunityIconStyles = { background: "#023047" };
  return (
    <div>
      <Overview
        title={CompanyOverview.title}
        banner={CompanyOverview.src1}
        overview={CompanyOverview.src2}
        desc1={CompanyOverview.desc1}
        desc2={CompanyOverview.desc2}
      />

      <Container style={{ fontFamily: "Prompt" }}>
        {/* Purpose and guiding principles  */}
        <section
          id="purpose-and-guiding-principles"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px 0 30px 0",
          }}
        >
          <h2 className="display-2" style={{ margin: "50px 0 30px 0" }}>
            Purpose And Guiding Principles
          </h2>
          <p className="lead" style={{ fontWeight: "500" }}>
            Our main purpose is to provide customer satisfaction and delight in
            the business of apparel and private label brand manufacturing. With
            superior quality, affordable price and low order quantity we help
            our clients to grow from grass root level and stand out as a
            remarkable brand in market. We always strive for excellence and
            adapting the new technology, trends so that our customer will never
            loose their grab in ever changing fashion industry.
          </p>
          <p className="lead" style={{ fontWeight: "500" }}>
            We provide our staffs a safe workplace and healthy work habits. We
            have taken care of their future career and have provided the
            necessary training to get updated in their profession. We have
            concern for environment as well. We adopt policy for less energy
            consumption and to reduce carbon footprint. We also follow fair
            business policy and we believe in living and let others live too.
          </p>
        </section>

        {/* Company History  */}
        <section id="company-history">
          <h2 className="display-2" style={{ margin: "30px" }}>
            Company History
          </h2>
          <VerticalTimeline lineColor="#BF863F">
            {History.map((item) => {
              let isHistoryIcon = item.icon === "history";
              let isTechnologyIcon = item.icon === "technology";
              return (
                <VerticalTimelineElement
                  key={item.key}
                  date={item.date}
                  dateClassName="date"
                  iconStyle={{ backgroundColor: "#fff" }}
                  icon={
                    isHistoryIcon ? (
                      <FaHistory />
                    ) : isTechnologyIcon ? (
                      <FaIndustry />
                    ) : (
                      <BsStarHalf />
                    )
                  }
                  contentStyle={{
                    background: "#26211F",
                    color: "#000",
                    padding: "40px",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #26211F",
                  }}
                >
                  <h3
                    className="vertical-timeline-element-title display-4"
                    style={{ color: "#fff", marginBottom: "10px" }}
                  >
                    {item.title}
                  </h3>
                  <h3
                    className="vertical-timeline-element-subtitle "
                    style={{ color: "#fff" }}
                  >
                    {item.date}
                  </h3>
                  <p
                    className="lead"
                    id="description"
                    style={{ color: "#fff" }}
                  >
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </section>

        {/* Fast Facts */}
        <section
          id="fast-facts"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px auto",
          }}
        >
          <h2 className="display-2" style={{ margin: "50px 0 30px 0" }}>
            Fast-Facts
          </h2>
          <ul className="lead" style={{ fontWeight: "500" }}>
            <li>
              <span style={{ fontWeight: "bold" }}>1989 – </span>started with a
              single Laxmi lock stitch machine
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>2015 - </span>registered as
              M/s 100Times Enterprises.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>2017 - </span>Registered as
              Aselus Enterprises Pvt. Ltd.{" "}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Present - </span>Company has
              its own power support system. Company has all the modern
              machineries to cater a plethora of products for its clients.
            </li>
          </ul>
        </section>

        {/* Board-of-Directors  */}

        <section
          id="board-of-directors"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px auto",
          }}
        >
          <h2 className="display-2" style={{ margin: "50px 0 30px 0" }}>
            Board Of Directors
          </h2>
          <p className="lead" style={{ fontWeight: "500" }}>
            Now Aselus Enterprises Pvt. Ltd . is a 100% women owned company
            under the directors Mrs. Bharati Behera and Mrs. Subhadra Behera.
            Mrs Bharati Behera have more than 40 years of experience in the
            field of footwear marketing and distribution which helps the
            organization for planning and creating new market and deploying
            marketing strategies. Mrs. Subhadra Behera has good technical
            knowledge over machine and manufacturing process which results in
            production of highest quality products in cost effective way which
            made it possible to provide less MOQ to new comer brands in market.
          </p>
        </section>
      </Container>
    </div>
  );
}
