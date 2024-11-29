import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amlan Nayak </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            Currently i am a student at SOA university.
            <br />
            I am pursuing my B.Tech in computer science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing song
            </li>
            <li className="about-activity">
              <ImPointRight /> Script Writting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amlan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
