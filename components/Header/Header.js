import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';
import Container from '../UI/Container';
import NavLink from '../UI/NavLink';

const Header = () => {
    const nav = useRef(null);
    useEffect(() => {
        document.onscroll = function (e) {
            console.dir(document);
        }
    })
    return (
        <header className={styles.Header}>
            <Container>
                <div className={styles.Content} ref={nav}>
                    <h2>Logo</h2>
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
            </Container>
        </header>
    )
}

export default Header;