import {Expo, gsap} from 'gsap';
import React, { useEffect } from 'react'

import img from '../img/img.jpeg' 
import Social from './Social';

const HomeP = () => {

    useEffect(() => {
    gsap.to(".first", .8, {delay: .3, top: "200%", ease: Expo.easeInOut});
    gsap.to(".second", .8, {delay: .5, top: "200%", ease: Expo.easeInOut});
    gsap.to(".third", 1, {delay: .7, top: "-100%", ease: Expo.easeInOut});
    gsap.to(".four", 1, {delay: .9, top: "-100%", ease: Expo.easeInOut});

    //IMG
    gsap.from('.home__img', {opacity: 0, duration: 2, delay: 1.4, x: 60})

    // INFORMATION
    gsap.from('.home__information', {opacity: 0, duration: 3, delay: 1.7, y: 25})
    gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 1.7, y: 25, ease:'expo.out', stagger: .3})

    // NAV ITEM
    gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 2.5,  ease:'expo.out'});
    gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 2.5, ease:'expo.out', stagger: .2})
    
    });
    

    return (
        <div>
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>
            <div className="overlay four"></div>

            <main className="l-main bd-grid">
                <div className="home">
                    <div className="home__information">
                        <span className="home__pressent anime-text">Hey!! Me Llamo</span>
                        <h1 className="home__title anime-text">Freddy</h1>
                        <span className="home__skill anime-text">Y Soy Desarrollador Full Stack Js</span>
                    </div>

                    <div className="home__img" >
                        <img src={img} alt="" className="imgH" />
                    </div>
                    
                    <Social />

                </div>
            </main>
        </div>
    )
}

export default HomeP
