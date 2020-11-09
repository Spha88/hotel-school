import React from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.scss';

const LinkButton = ({ href, label }) => {
    return (
        <Link href={href} >
            <a className={styles.LinkButton}>{label} <i className="material-icons">keyboard_arrow_right</i></a>
        </Link>
    )
}

export default LinkButton
