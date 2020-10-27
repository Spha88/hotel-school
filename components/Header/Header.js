import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.Header}>
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h2>Logo</h2>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/courses">
                            <a>courses</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;