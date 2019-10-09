import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Connecter() {
  return (
    <div className="Connect">
      <h2>Connectez-vous à votre compte</h2>
      <h4>Vous n'avez pas de compte?</h4>
      <Link to="/souscrire">
        <h4> En créer un .</h4>
      </Link>
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
      <Button className="btnforms" variant="success" type="submit">
        Se connecter
      </Button>
      <h4>Mot de passe oublié?</h4>
    </div>
  );
}
export default Connecter;
