import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#222", color: "white", padding: "20px 0" }}>
      <Container>
        <Row>
          <Col className="text-center">
            <h5>Connect with Me</h5>
            <div style={{ margin: "10px 0" }}>
              <a
                href="https://github.com/suhail22a"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px", color: "white" }}
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/suhailahmad786/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px", color: "white" }}
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://x.com/Suhail223sam"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px", color: "white" }}
              >
                <FaTwitter size={30} />
              </a>
            </div>
            <p>Made with ❤️ by Suhail</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
