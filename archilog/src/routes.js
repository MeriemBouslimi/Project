import React from 'react';
import { Switch, BrowserRouter, Route  } from 'react-router-dom';
import Cour from './pages/Cour';
import Cours from './pages/Cours';
import Home from "./pages/Home";
import Login from './pages/Login';
import Profil_etudiant from './pages/Profil_etudiant';
import ProfilFormateur from './pages/ProfilFormateur';
import Subscription from './pages/Subscription';
import Test from './pages/Test';
import didactiel from './components/home/populaires/didactiel';
import Design from './pages/Design';
import Log_2d from './pages/Log_2d';
import Log_3d from './pages/Log_3d';
import Animation from './pages/Animation';


const Routes = () => (
   <BrowserRouter>
        <Switch>
            <Route path="/cour" component={Cour} />
            <Route path="/cours" component={Cours} />
            <Route path="/Carddidact" component={didactiel} />
            <Route path="/archilog" component={Home} />
            <Route path="/se_connecter" component={Login} />
            <Route path="/profil_etudiant" component={Profil_etudiant} />
            <Route path="/profilFormateur" component={ProfilFormateur} />
            <Route path="/souscrire" component={Subscription} />
            <Route path="/test" component={Test} />
            <Route path="/design" component={Design} />
            <Route path="/log_2d" component={Log_2d} />
            <Route path="/log_3d" component={Log_3d} />
            <Route path="/animation" component={Animation} />
        </Switch>
   </BrowserRouter>
);

export default Routes;