import React from "react";
import { Image } from "react-bootstrap";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          figure: "/images/design-systems400.jpg",
          title: "Systèmes de conception",
          contenu: "Tous les systèmes de conception ne sont pas aussi efficaces. Certains peuvent générer des expériences utilisateur cohérentes, d’autres des conceptions en",
          imgformateur: "/images/smashing400.jpg",
          nomformateur: "Smashing Magazine",
          secteur: "DESIGN ET ILLUSTRATION"
        },
        {
          figure: "/images/How_to_take.jpg",
          title: "Comment prendre de superbes photos",
          contenu: "Le photographe professionnel Peter Tellone, dans Comment prendre de bonnes photos, vous enseigne les compétences de base dont vous avez besoin pour prendre",
          nomformateur: "Peter Tellone",
          secteur: "PHOTO ET VIDÉO"
        },
        {
          figure: "/images/pr400.jpg",
          title: "Découverte du design pratique",
          contenu: "La découverte n'est pas simplement la première étape d'un travail de conception réussi - c'est la plus essentielle.",
          imgformateur: "/images/400.png",
          nomformateur: "Un livre à part",
          secteur: "DESIGN ET ILLUSTRATION"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="carddesk">
          {this.state.books.map((el, i) => (
            <div className="cardtest">
              <img className="imgbook" alt="" src={el.figure} />
              <div>
                <h3>{el.title}</h3>
                <p className="parag_test">{el.contenu}</p>
              </div>
              <div className="cardfooter">
                <div className="formatinfo">
                <Image className="formatimg" src={el.imgformateur} roundedCircle />
                <h3 className="formatname">{el.nomformateur}</h3>
                </div>
                <span className="secteur">{el.secteur}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Books;
