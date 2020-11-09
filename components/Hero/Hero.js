import React from 'react'
import styles from './Hero.module.scss'
import Link from 'next/link';

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroContent}>
                <div className={styles.Logo}>
                    <img src="/images/logo_square_blue_bg_white.png" alt="logo" />
                    <h1>Invest in yourself</h1>
                </div>
                <div className={styles.CallToAction}>
                    <Link href="/contact">
                        <a>Enrol Now <i className="material-icons">keyboard_arrow_right</i></a>
                    </Link>
                </div>
            </div>
            <div className={styles.HeroBackground} style={{ backgroundImage: "url(/images/bg2.jpeg)" }}></div>
        </div>
    )
}

export default Hero
