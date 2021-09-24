import gsap from 'gsap'
import React, { useEffect } from 'react'

const Social = () => {

     useEffect(() => {
        // SOCIAL
        gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 3, y: 25, ease:'expo.out', stagger: .2})
     })

    return (
        <div className="home__social">
            <a href="https://www.facebook.com/profile.php?id=100016167039922"><ion-icon name="logo-facebook" class="home__social-icon"></ion-icon></a>
            <a href="https://www.facebook.com/profile.php?id=100016167039922"><ion-icon name="logo-instagram" class="home__social-icon"></ion-icon></a>
            <a href="https://www.facebook.com/profile.php?id=100016167039922"><ion-icon name="logo-twitter" class="home__social-icon"></ion-icon></a>
        </div>
    )
}

export default Social
