import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.Header}>
        <h2>Logo</h2>
        <ul>
            <li>Home</li>
            <li>about</li>
            <li>Contact</li>
            <li>location</li>
        </ul>
    </header>
);

export default Header;