import React from 'react'
import Zoom from 'react-reveal/Zoom';

import styles from './AboutContent.module.scss';

const AboutContent = () => {
    return (
        <section className={styles.AboutContent}>
            <header>
                <h2>WE ARE PRÉVENANCE HOTEL SCHOOL</h2>
            </header>
            <main>
                <Zoom><img src="/images/about1.jpeg" alt="wine and wine glasses" /></Zoom>
                <div className={styles.AboutContent}>
                    <div className={styles.Heading}>
                        <div className={styles.HeadingInner}>
                            <Zoom><h2>OUR STORY</h2></Zoom>
                            <Zoom delay={500}><div className={styles.Line}></div></Zoom>
                        </div>
                    </div>
                    <div className={styles.Paragraph}>
                        <Zoom>
                            <p>
                                Prévenance Hotel School <strong>CATHSETA accredited</strong> is a professional academy focused on training students who intend to establish themselves as leaders in the hospitality industry.
                            </p>
                        </Zoom>
                        <Zoom>
                            <p>
                                Our students have a range of excellent courses to choose from. Through our intake program we help them find just the right course and career for their personality.
                    </p>
                        </Zoom>
                        <Zoom>
                            <p>
                                Have practical fun while learning, join us for best journey of your life!
                    </p>
                        </Zoom>

                        <Zoom>
                            <h2>Our history</h2>
                        </Zoom>

                        <Zoom>
                            <p>We started Prévenance Hotel School as a result of our passion for excellence in service.
                            Having been in the hospitality space for a number of years, it became clear that gaps and areas of improvement exist in our industry. We soon realised that no amount screaming, hiring and firing will improve the service offering by a number of hospitality establishments, from guest houses to hotels.
                        </p>
                        </Zoom>

                        <Zoom>
                            <p>Training of staff to take pride in what they do, became the only option. At the center of our curriculum is the intention to produce graduates that not only know what they do, but also take pride in their service and desire to only give their best.</p>
                        </Zoom>

                        <Zoom>
                            <p>We have no doubt of the great impact our academy will make in the lives and careers of many young people across our country and the continent.</p>
                        </Zoom>
                    </div>
                </div>
                <Zoom>
                    <img src="/images/about2.jpeg" alt="writing and studying" />
                </Zoom>
            </main>
        </section>
    )
}

export default AboutContent
