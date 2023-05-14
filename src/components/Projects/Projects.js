import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Schedura"
              description="Android App to track attendance and check time-table. Over 500+ Downloads on Play Store.
              Structured the app using Kotlin, Retrofit, Coroutines and Room DB."
              ghLink="https://github.com/GDSC-DSI/Schedura"
              demoLink="https://play.google.com/store/apps/details?id=net.code.gdsc_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ani-Search"
              description="Android App to search, read about and track animes. It uses MyAnimeList API for fetching data.
              Developed the app using MVVM, Retrofit2, OkHttp3, Couroutines, RoomDB, DI, Hilt."
              ghLink="https://github.com/AniSearch/AniSearch-Android"
              demoLink="https://github.com/AniSearch/AniSearch-Android/releases/download/Beta/app-debug.apk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pass-Ki-Dukaan"
              description="Pass-Ki-Dukaan is an E-Commerce solution that helps local vendors sell their products to their local customers via an online platform."
              ghLink="https://github.com/RedFox-Developers/Pass-Ki-Dukaan"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Planet Pulse"
              description="An app that helps user track thier annual carbon footprint, ask in-built ChatGPT about it, get rewarded
              with in-app currency which can be used in included shop and get tips on how to reduce their carbon emission.."
              ghLink="https://github.com/DroidDevs-NITK/PlanetPulse"
              demoLink="https://github.com/DroidDevs-NITK/PlanetPulse/releases/download/alpha/app-debug.apk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Money Manager"
              description="This is a finance management application that is helpful for people who run shops or businesses having 5-20 workers. This solution has an admin app and a worker side app. The workers enter their spends and finances and the owner can monitor it."
              ghLink="https://github.com/debz-g/MoneyManager"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Abstract Notes"
              description="A simple material designed note taking application that uses local database to save notes. The user can take notes, add images to it and color code the notes as they wish."
              ghLink="https://github.com/RedFox-Developers/AbstractNotes"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
