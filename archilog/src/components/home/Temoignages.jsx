import React from "react";
import { Carousel, Image } from "react-bootstrap";

function Temoignage() {
  return (
    <div className="boxtemoignage">
      <h2 className="titleslides">Témoignages d'anciens</h2>
      <Carousel className="carousel">
        <Carousel.Item className="slideitems">
          <p className="texttemois">
            "J'ai été époustouflé par le niveau d'interaction personnelle offert
            par les formateurs.Je n'aurais pas pu imaginer que je passerais de
            rien à PRO, à recevoir des offres d'emploi dans les six mois suivant
            des études chez ArchiLog! "
          </p>
          <Image
            className="figslide"
            src="/images/esteben.jpeg"
            roundedCircle
          />
          <h4 className="nametmg">Bayrem Jaffeli</h4>
        </Carousel.Item>
        <Carousel.Item className="slideitems">
          <p className="texttemois">
            "Grâce à ArchiLog, j'ai pu élever mes compétences en art conceptuel
            à un niveau professionnel. Merci à ArchiLog de m'avoir donné
            exactement ce dont j'avais besoin pour débuter dans ce secteur
            concurrentiel. "
          </p>
          <Image
            className="figslide"
            src="/images/ann palm.jpg"
            roundedCircle
          />
          <h4 className="nametmg">khadija Riahi</h4>
        </Carousel.Item>
        <Carousel.Item className="slideitems">
          <p className="texttemois">
          "J'ai été époustouflé par le niveau d'interaction personnelle offert
            par le mentorat 1 contre 1.Je n'aurais pas pu imaginer que je
            passerais de rien à FX, à recevoir des offres d'emploi dans les six
            mois suivant des études chez CG Spectrum! "
          </p>
          <Image
            className="figslide"
            src="/images/kristian.assirati.jpg"
            roundedCircle
          />
          <h4 className="nametmg">Sofiene Missaoui</h4>
        </Carousel.Item>
        <Carousel.Item className="slideitems">
          <p className="texttemois">
            "Le soutien ne se termine pas avec votre diplôme. Ils vous donnent
            l’occasion de montrer votre travail aux studios les plus
            impressionnants du monde, d’obtenir des retours directs et de
            comprendre ce que les studios recrutent réellement."
          </p>
          <Image className="figslide" src="/images/charles.jpg" roundedCircle />
          <h4 className="nametmg">Badiss bakouch</h4>
        </Carousel.Item>
        <Carousel.Item className="slideitems">
          <p className="texttemois">
          " Ma compréhension de 3D était minime à mes débuts, mais avec l'aide
            des formateurs, j'ai réussi à développer mes compétences et à mettre
            les pieds dans la porte d'une grande agence."
          </p>
          <Image
            className="figslide"
            src="/images/victoria.jpg"
            roundedCircle
          />
          <h4 className="nametmg">Miniar Bourass</h4>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Temoignage;
