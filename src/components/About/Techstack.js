import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiAndroid,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiKotlin,
  SiFlutter,
  SiDart,
  SiSqlite
} from "react-icons/si";

import { 
  BsFiletypeXml
 } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeXml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
      </Col>
    </Row>
  );
}

export default Techstack;
