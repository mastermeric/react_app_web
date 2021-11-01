import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../../App.css";
import Legumes from '../../images/legumes.jpeg';
import Automotive from '../../images/automotive.jpeg';
import SmartSystems from '../../images/smartsystem.png';
import Textile from '../../images/textile.jpeg';

const HeadingInfo = () => {
  return (
    <React.Fragment>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Automotive} className="img-thumbnail" />
          <Card.Body>
            <Card.Title>Automotive</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-info" href="mailto:support@trade-ist.com">Email Us</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Legumes} className="img-thumbnail" />
          <Card.Body>
            <Card.Title>Legumes</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-info" href="mailto:support@trade-ist.com">Email Us</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={SmartSystems} className="img-thumbnail" />
          <Card.Body>
            <Card.Title>Smart Systems</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-info" href="mailto:support@trade-ist.com">Email Us</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Textile} className="img-thumbnail" />
          <Card.Body>
            <Card.Title>Textile</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="outline-info" href="mailto:support@trade-ist.com">Email Us</Button>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default HeadingInfo;
