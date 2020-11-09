import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroContent}>
                <img src="/images/logo_square_blue_bg_white.png" alt="logo" />
                <h1>Invest in yourself</h1>
            </div>
            <div className={styles.HeroBackground} style={{ backgroundImage: "url(/images/bg2.jpeg)" }}></div>
        </div>
    )
}

export default Hero
