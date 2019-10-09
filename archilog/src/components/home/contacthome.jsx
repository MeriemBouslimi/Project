import React from "react";
import { Button, Form } from "react-bootstrap";

function Contacthome() {
  return (
    <div className="contacthome">
      <h2 className="titleform">Prêt à commencer quelque chose de grand?</h2>
      <div className="containerform">
        <div className="txtform">
          <p>
            Et si vous pouviez concrétiser le travail de vos rêves dans le
            cinéma 4D ou les rendus 3D? Et si vous aviez des mentors de
            l'industrie primés vous montrant les ficelles du métier?
          </p>
          <p>
            Et si vous pouviez développer des compétences professionnelles
            précieuses et les dernières techniques de l'industrie en ligne, dans
            le confort de votre foyer?
          </p>
          <p>
            Obtenez les compétences et la confiance pour être récompensé de
            votre créativité par l'animation en ligne de CG Spectrum, VFX et la
            Game Design School.
          </p>
        </div>
        <div className="forminput">
          Prénom
          <input placeholder="Entrer Prénom"></input>
          Nom
          <input placeholder="Entrer Nom"></input>
          E-mail
          <input placeholder="Entrer E-mail"></input>
          Dites-nous quel cours vous intéresse ou comment nous pouvons vous
          aider
          <input
            className="containerinput"
            placeholder="Entrer Message"
          ></input>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Abonnez-vous pour obtenir nos dernières ressources."
            />
          </Form.Group>
          <Button variant="success">Envoyez</Button>
        </div>
      </div>
    </div>
  );
}

export default Contacthome;
