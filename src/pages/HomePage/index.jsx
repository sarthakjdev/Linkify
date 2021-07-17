
import React from 'react';
import Header from '../../components/HomePage/header/Header.js'
import Home from '../../components/HomePage/featuresec/featuresec'
import HeroSection from "../../components/HomePage/herosection/herosection";

export default function App(){
    return(
        <div>
            <Header />
            <Home />
            <HeroSection
            titleP="All your links in one place."
            about="The only link you'll ever need to connect with everyone in the world."
            start="Get Started"
            />
        </div>
    )
}

