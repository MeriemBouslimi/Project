import React from "react";
import Carddidact from "./didactiel";
import Cours from './Cours';
import Books from './Books';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didac: true,
      cours: false,
      books: false,
      class1:"btn-pop",
      class2:"btn-pop",
      class3:"btn-pop",
      
    };
  }

  didacChange = () => {
    this.setState({
      didac: !this.state.didac,
      cours: false,
      books: false,
      class1:"btnclicked",
      class2:"btn-pop",
      class3:"btn-pop",
    });
  };
  coursChange = () => {
    this.setState({
      cours: !this.state.cours,
      didac: false,
      books: false,
      class2:"btnclicked",
      class1:"btn-pop",
      class3:"btn-pop",
    });
  };
  booksChange = () => {
    this.setState({
      books: !this.state.books,
      didac: false,
      cours: false,
      class3:"btnclicked",
      class2:"btn-pop",
      class1:"btn-pop",
    });
  };

  render() {
    return (
      <div className="populaire">
        <div>
          <div  className="btn_populaire">
          <button className={this.state.class1} onClick={this.didacChange}>
            Didacticiels populaires
          </button>
          <button className={this.state.class2} onClick={this.coursChange}>
          Cours populaires
          </button>
          <button className={this.state.class3} onClick={this.booksChange}>
          EBooks populaires
          </button>
          </div>
          
          {this.state.didac ? <Carddidact /> : null}
          <div>{this.state.cours ? <Cours/> : null}</div>
        <div>{this.state.books ? <Books/> : null}</div>
        </div>
        
      </div>
    );
  }
}

export default Popular;
