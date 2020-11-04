import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroContent}>
                <img src="/images/logo_square_blue_bg_white.png" alt="logo" />
                <h1>PRÉVENANCE</h1>
                <h2>WE ARE PRÉVENANCE HOTEL SCHOOL</h2>
            </div>
            <div className={styles.HeroBackground} style={{ backgroundImage: "url(/images/bg.jpg)" }}></div>
        </div>
    )
}

export default Hero
