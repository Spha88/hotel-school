import React from 'react';
import Link from 'next/link'

import styles from './AboutFrontPage.module.scss';
import Container from '../../UI/Container';

const AboutFrontPage = () => {
    return (
        <div className={styles.AboutFrontPage}>
            <Container>
                <div className={styles.AboutContent}>
                    <div className={styles.Heading}>
                        <div className={styles.HeadingInner}>
                            <h2>OUR STORY</h2>
                            <div className={styles.Line}></div>
                        </div>
                    </div>
                    <div className={styles.Paragraph}>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me.

                            It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.
                        </p>
                        <Link href="/about">
                            <a><span>Read More</span> <i
                                className='fas fa-chevron-right'
                                aria-hidden='true'
                            ></i></a>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutFrontPage
