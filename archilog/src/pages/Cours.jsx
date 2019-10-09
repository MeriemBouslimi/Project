import React from 'react';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import Cours from '../components/home/populaires/Cours';

export default function Home () { 
    return(
    <div>
    <Header />
    <Cours/>
    <Footer/>
    </div>
);
}
