import gsap, { Expo } from 'gsap'
import React, { useEffect } from 'react'


import Social from './Social'

import img from '../img/code.png' 

import Swal from 'sweetalert2'
import '@sweetalert2/theme-dark'

const Perfil = () => {
 
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
    gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 2.5,  ease:'expo.out', stagger: .2})

    });
    

    const PerfilOpen = () =>{
        Swal.fire({
            title: 'Mi Perfil:',
            html:`<p className="PopUpTextico">Nombre: Freddy Stiben Calderon Barreto</p>
                <p>Fecha Nacimiento: 06/04/2004</p>
                <p>Numero Contacto: 3132286510</p>
                <p>Email: freddystibencb@gmail.com</p>`,
            
            width: 500,
            padding: '1em',
            background:"rgba(1, 4, 26,0.99)",
            backdrop: "rgba(27, 30, 51,0.4)"

            
        })
    }

    return (
        <div>
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>
            <div className="overlay four"></div>

        <main className="l-main bd-grid">
            <div className="home">
                <div className="home__information">
                    
                    <span className="home__skill anime-text UpText" id="perfil">Mi Perfil</span>
                    <p>
                        <span className="home__p anime-text">Soy Desarrollador web con un par de años de experiencia.</span><br/><br/>
                        <span className="home__p anime-text">Mis conocimientos en esta área van desde el maquetado con html,<br/> los estilos de las paginas con Css,boostrap e incluso javascript.</span><br/><br/>
                        <span className="home__p anime-text">Con todo lo relacionado a base de datos tengo un buen control de MySQL</span><br/><br/>
                        <span className="home__p anime-text">Y por ultimo pero no menos importante una gran actitud y energia!!! :D</span>
                    </p>
                    <button  onClick={PerfilOpen} className="home__pressent anime-text titilar">Más Info</button>
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

export default Perfil
