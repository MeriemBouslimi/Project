import React from 'react';
import Header from '../components/home/Header';
import Main from '../components/home/Main';
import Carddidact from '../components/home/populaires/Populaires';
import Emploi from '../components/home/Emploi';
import Temoignage from '../components/home/Temoignages';
import Contacthome from '../components/home/contacthome';
import Footer from '../components/home/Footer';

export default function Home () { 
    return(
    <div>
    <Header />
    <Main/>
    <Carddidact/>
    <Emploi/>
    <Temoignage/>
    <Contacthome/>
    <Footer/>
    </div>
);
}
