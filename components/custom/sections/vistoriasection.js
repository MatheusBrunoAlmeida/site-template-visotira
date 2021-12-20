import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/staticslider/slider/hero-banner.jpg";
import vistoriaImage from '../../../assets/images/vistoriaImage.jpg'
const VistoriaSection = () => {
  return (
    <div>
      <div className="vistoria-banner-container">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center ">
              <h1 className="title">Vistoria veicular</h1>
              <h6 className="subtitle op-8">
                A vistoria veicular é um dever de todo proprietário de automóvel e garante o benefício de poder circular pelas vias de todo o país com o seu veículo.
                <br />
                É com a vistoria que se verifica as condições de circulação do veículo, bem como atesta a sua existência e legalidade.
                Assim, são realizados procedimentos de qualidade e integridade com o objetivo de testar o funcionamento dos equipamentos que são obrigatórios e saber se a documentação é autêntica.
                <br />
                É pela vistoria que se pode ter a legitimidade da propriedade do veículo.
              </h6>
              <a
                className="btn btn-call-to-action btn-border-radius btn-md m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>Agendar agora</span>
              </a>
            </Col>
            <Col md="6">
              <Image src={vistoriaImage} className="image-vistoria-banner" height={500} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VistoriaSection;