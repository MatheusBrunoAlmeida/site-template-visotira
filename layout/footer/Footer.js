/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Endereço</h5>
            <p>AV BRASIL 4115 SETOR SUL JAMIL MIGUEL 75.124-145</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Telefone</h5>
            <p>
              Celular : (62) 9 9965-8205<br />
              WhatsApp : (62) 9 9965-8205
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              <Link href="#">
                <a className="link">2dvistoria@gmail.com</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="#">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-google-plus"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  Todos os direitos reservados por{" "}
                  <Link href="#">
                    <a className="link">CTRL Midia</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
