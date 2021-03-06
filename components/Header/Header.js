import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Zoom from 'react-reveal/Zoom';

import styles from './Header.module.scss';
import NavLink from '../UI/NavLink';
import Link from 'next/link';


const Header = () => {

    const [openNav, setOpenNav] = useState(false);
    const toggleMobileNav = () => {
        setOpenNav(!openNav);
    }

    useEffect(() => {
        // Check if Nav is at the top and add or remove Top class
        const nav = $('#desktopNav');
        const distance = nav.offset().top;
        const $window = $(window);

        $window.scroll(function () {
            // console.log(nav);
            if ($window.scrollTop() >= (distance + 40)) {
                nav.addClass(styles.Top);
            } else {
                nav.removeClass(styles.Top)
            }
        });
    }, [])

    return (
        <header className={styles.Header}>

            <div className={styles.Content} id="desktopNav">

                <div className={styles.LogoAndSlogan}>
                    <div className={styles.LogoContainer}
                        style={{ backgroundImage: "url(/images/logo_new.svg" }}
                    >
                        <Link href="/">
                            <a><img src="/images/logo_new.svg" alt="logo" /></a>
                        </Link>
                    </div>

                    <div className={styles.Slogan}>
                        <Zoom delay={1000}>
                            <Link href="/">
                                <a><h2>Invest in yourself</h2></a>
                            </Link>
                        </Zoom>
                    </div>
                </div>

                <ul>
                    <li>
                        <NavLink href="/" exact activeClassName={styles.Active}>
                            <a>Home</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/about" activeClassName={styles.Active}>
                            <a>About</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/courses" activeClassName={styles.Active}>
                            <a>courses</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/gallery" activeClassName={styles.Active}>
                            <a>Gallery</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact" activeClassName={styles.Active}>
                            <a>contact</a>
                        </NavLink>
                    </li>
                </ul>
                <div className={styles.BurgerIcon}>
                    <button onClick={toggleMobileNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>



            <div className={`${styles.MobileNav} ${openNav ? styles.OpenMobileNav : ''}`} onClick={toggleMobileNav}>
                <div className={styles.LogoContainer}
                    style={{ backgroundImage: "url(/images/logo_new.svg" }}
                >
                    <Link href="/">
                        <a>
                            <img src="/images/logo_new.svg" alt="logo" />
                        </a>
                    </Link>
                </div>
                <ul>
                    <li>
                        <NavLink href="/" exact activeClassName={styles.Active}>
                            <a>Home</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/about" activeClassName={styles.Active}>
                            <a>About</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/courses" activeClassName={styles.Active}>
                            <a>courses</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/gallery" activeClassName={styles.Active}>
                            <a>Gallery</a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact" activeClassName={styles.Active}>
                            <a>contact</a>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;