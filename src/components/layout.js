import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./layout.module.css";
import Indicator from "./indicator";
import ComboChart from "../charts/combo-chart";
import PieChart from "../charts/pie-chart";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Container className={style.container}>
          <Row>
            <Col lg="8" className={style.col}>
              <ComboChart />
            </Col>
            <Col lg="4" className={style.col}>
              <PieChart />
            </Col>
          </Row>
          <Row>
            <Col xs="6" lg="4" className={style.col}>
              <Indicator number="14" indicator="Analysts" />
            </Col>
            <Col xs="6" lg="4" className={style.col}>
              <Indicator number="5" indicator="Escalations" />
            </Col>
            <Col xs="6" lg="4" className={style.col}>
              <Indicator number="0" indicator="Backlog" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
