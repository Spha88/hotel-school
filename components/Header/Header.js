import React, { useState } from 'react';

import styles from './Header.module.scss';
import Container from '../UI/Container';
import NavLink from '../UI/NavLink';

const Header = () => {

    const [openNav, setOpenNav] = useState(false);
    const toggleMobileNav = () => {
        setOpenNav(!openNav);
    }

    return (
        <header className={styles.Header}>

            <div className={styles.Content}>
                <div className={styles.LogoContainer}
                    style={{ backgroundImage: "url(/images/logo_new.svg" }}
                >
                    <img src="/images/logo_new.svg" alt="logo" />
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
                        <i className="material-icons">menu</i>
                    </button>
                </div>
            </div>



            <div className={`${styles.MobileNav} ${openNav ? styles.OpenMobileNav : ''}`} onClick={toggleMobileNav}>
                <div className={styles.LogoContainer}
                    style={{ backgroundImage: "url(/images/logo_new.svg" }}
                >
                    <img src="/images/logo_new.svg" alt="logo" />
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