import React from "react";
import   Header  from '../home/Header';
import Footer from '../home/Footer';
import Cours from '../home/populaires/Cours';


function Formateur () {
    return(
        <div>
              <Header />
    <div className="formatinfom">      
<img className="format" src='/images/daniel.jpg' alt=""></img>
<h1>Daniel</h1>
</div>
<Cours/>
<Footer/>
        </div>
    )
}

export default Formateur;