import React from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';






class Carddidact extends React.Component {

  render() {
    return (
      <div>
        <div className="carddesk">
          {this.props.map((el, i) => (
            <div key={i} className="cardtest">
              <Link to="/Carddidact">
              <img className="imgcard" alt="" src={el.figure} />
              </Link>
              <div>
                <h3 className="prag-tit">{el.title}</h3>
                <p className="parag_test">{el.contenu}</p>
              </div>
              <div className="cardfooter">
                <div className="formatinfo">
                <Link to="/profilFormateur">
                <Image className="formatimg" src={el.formateur.img} roundedCircle />
                </Link>
                <h3 className="formatname">{el.formateur.name}</h3>
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

export default Carddidact;
