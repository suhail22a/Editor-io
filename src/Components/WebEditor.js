// import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Editor from "./WebEditor/Editor";
import Footer from "./Footer";
import { useLocalStorage } from "../Hooks/LocalStorage";

function WebEditor() {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const [html, updateHtml] = useLocalStorage("html", "<h2>Hello User</h2>");
  const [css, updateCss] = useLocalStorage("css", "body{ text-align:center; }");
  const [js, updateJs] = useLocalStorage("js", "");

  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      </head>
      <body>
        ${html}
        ${js && `<script src="${jsURL}"></script>`}
      </body>
      </html>`;

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Editor language="xml" value={html} onChange={updateHtml} />
          </Col>
          <Col>
            <Editor language="css" value={css} onChange={updateCss} />
          </Col>
          <Col>
            <Editor language="javascript" value={js} onChange={updateJs} />
          </Col>
        </Row>
      </Container>
      <iframe title="output" srcDoc={srcDoc} style={{ width: "100%", height: "40vh", border: "none" }} />
      <Footer />
    </div>
  );
}

export default WebEditor;
