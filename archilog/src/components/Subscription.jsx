import React from 'react';
import { Button,Form,Row,Col } from "react-bootstrap";
import './style.css';

function Formulaire(){
    return(
      <div className="form">
<h2 className="titleform">Prêt à commencer quelque chose de grand?</h2>
      <div className="containerform">
        <div className="txtforms">
          <p>
          Ravi de vous voir ici!
          </p>
          <span>Créez un compte ArchiLog pour parcourir tous les éléments.</span>
        </div>
        <div className="forminput">
        <Form>
        <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="btnforms" variant="success" type="submit">
  Submit
  </Button>
  <Button className="btnforms" variant="success" type="reset">
  Reset
  </Button>
</Form>
        </div>
      </div>
      </div>
    );
    }

    export default Formulaire;