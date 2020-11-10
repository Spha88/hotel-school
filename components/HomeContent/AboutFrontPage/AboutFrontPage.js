import React from 'react';
import Zoom from 'react-reveal/Zoom';

import styles from './AboutFrontPage.module.scss';
import Container from '../../UI/Container';
import LinkButton from '../../UI/LinkButton/LinkButton';

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
                        <Zoom>
                            <p>Prévenance Hotel School is a <strong>CATHSETA accredited</strong> professional academy focused on training students who intend to establish themselves as leaders in the hospitality industry.</p>
                        </Zoom>
                        <Zoom delay={1000}>
                            <LinkButton href="/about" label="Read More" />
                        </Zoom>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default AboutFrontPage
