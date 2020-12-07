import React from 'react'
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
import styles from './Hero.module.scss'


const Hero = () => {
    const bgLoaded = () => {
        alert('Image completed loading')
    }
    const error = () => {
        console.log("There has been an error loading your image");
    }
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroContent}>
                <div className={styles.Logo}>
                    <Zoom>
                        <img src="/images/new_logo.png" alt="logo" />
                    </Zoom>
                    <Zoom>
                        <h1>Invest in yourself</h1>
                    </Zoom>
                </div>
                <div className={styles.CallToAction}>
                    <Zoom delay={1000}>
                        <Link href="/contact">
                            <a>
                                Enrol Now
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </Link>
                    </Zoom>
                </div>
            </div>
            <div className={styles.HeroBackground} style={{ backgroundImage: "url(/images/bg2.jpg)" }}>
            </div>
        </div>
    )
}

export default Hero
