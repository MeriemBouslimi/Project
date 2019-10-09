import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="main">
     <div className="cote">
     <img className="design_img" src="/images/mobBanner.jpg" alt="" />
     <div className="txt_container">
        <h2 className="title-design">Conception 2D</h2>
        <p className="pargraphe">Formation dispensée par des professionnels du secteur et destinée à vous aider à démarrer votre carrière.</p>
        </div>
     </div>
     <div className="middle">
       <div className="middlecontainer">
       <img className="design_iiii" src="/images/vectorstock.jpg" alt="vector"/>
       <div className="txt_container2">
            <h2 className="title-design2">Design et Illustration</h2>
            <p className="pargraphe">Concevez, dessinez, peignez, dessinez et coloriez votre prochain projet graphique.</p>
        </div>
       </div>
       <div>
       <img className="design_i" src="/images/design_jobs.jpg" alt="design_jobs" />
       <div className="txt_container3">
            <h2 className="title-design3">Animation 3D</h2>
            <p className="pargraphe">Formation spécialisée dans le secteur de l'animation 3D</p>
        </div>
       </div>
     </div>
     <div className="cote">
       <div>
       <img className="design_im" src="/images/3d.jpg" alt="3D" />
       <div className="txt_container4">
        <h2 className="title-design2">Modélisation 3D</h2>
        <p className="pargraphe">Rendu architectural, visualisation architecturale, rendu 3D.</p>
        </div>
       </div>
       <div className="cote_middle">
       <h2 className="title-design">Diplôme avancé en modélisation 3D</h2>
        <p className="pargraphe2">Couvrez tous les domaines, de la modélisation de surfaces dures à la modélisation de personnages, de bâtiments et d'environnements, en plus de la façon d'éclairer et de rendre vos modèles à un niveau professionnel.</p>
       </div>
       <div className="cote_bottom">
       <h2 className="title-bottom">What Do You Want to Learn Today?</h2>
        <p className="p-bottom">What Do You Want to Learn Today?
Discover free how-to tutorials and over 1,260 video courses. Build an app, create a website, or learn a new skill.</p>
<Link to="/souscrire">
<button className="btn_abn">S'abonnez avec ArchiLog</button>
</Link>
       </div>
     </div>
    </div>
  );
}

export default Main;