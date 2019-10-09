import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import {graphql } from 'react-apollo';


const getCourQuery = gql`
  {
    Cours {
      id
      title
      contenu
      figure
      secteur
      formateur
    }
  }
`

class Cours extends React.Component {
  render() {
    const { dact } = this.props;
    console.log(this.props)
    return (
      <div>
        <div className="carddesk">
          {dact &
            dact.map((el, i) => (
              <div  key={i} className="cardtest">
                <Link to="/cours">
                  <img className="imgcard" alt="" src={el.figure} />
                </Link>
                <div>
                  <h3 className="prag-tit">{el.title}</h3>
                  <p className="parag_test">{el.contenu}</p>
                </div>
                <div className="cardfooter">
                  <div className="formatinfo">
                    <Image
                      className="formatimg"
                      src={el.formateur.img}
                      roundedCircle
                    />

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

export default graphql(getCourQuery)(Cours);
