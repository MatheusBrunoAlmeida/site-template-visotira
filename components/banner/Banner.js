import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Banner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">A 2D é o novo</h1>
            <h4 className="subtitle font-light">
              O novo conceito de  <strong>Vistoria veicular</strong>
            </h4>

            <Button
              to="/#coming"
              // className="btn btn-md m-t-30 btn-danger-gradiant font-14"
              className="btn btn-md m-t-30 btn-call-to-action font-14"
            >
              Agendamento
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
