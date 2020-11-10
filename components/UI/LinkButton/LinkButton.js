import React from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.scss';

const LinkButton = ({ href, label }) => {
    return (
        <Link href={href} >
            <a className={styles.LinkButton}>
                {label}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </Link>
    )
}

export default LinkButton
