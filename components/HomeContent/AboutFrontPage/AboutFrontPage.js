import React from 'react';
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
                        <a href="/about">Read More</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutFrontPage
