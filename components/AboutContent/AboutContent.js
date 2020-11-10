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
                <img src="/images/about1.jpeg" alt="wine and wine glasses" />
                <div className={styles.Content}>
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

                        <Zoom>
                            <h2>Our campuses</h2>
                        </Zoom>

                        <Zoom>
                            <p>
                                As a Northern Cape based academy, we have our footprint in four of the major towns in the province – Kimberley, Upington, De Aar and Kuruman.
                                Training resources are therefore distributed in line with the major needs and demands of each geographical area.
                            </p>
                        </Zoom>
                        <Zoom>
                            <ul>
                                <li><strong> Kimberley Campus</strong> – has a higher demand volume for Professional Cookery training</li>
                                <li><strong>Upington Campus</strong> – Food & Beverage Services and Accommodation Services are the in-demand skills for most of the hospitality establishments.</li>
                                <li><strong>Kuruman Campus</strong> – through this campus we respond to the high demand for Accommodation Services training, in and around the John Taolo Gaetsewe district.</li>
                                <li><strong>De Aar Campus</strong> – presumably the presence of the renewable energy operations in the area has hiked the demand for improved standards, both for Accommodation and Food & Beverage Services.</li>
                            </ul>
                        </Zoom>
                        <Zoom>
                            <p>Through our various campuses, we are therefore able to meet the various hospitality demand for skills across the province.</p>
                            <p>Whilst our courses are offered across all campuses, we encourage our students to choose a campus that can provide an environment resonant with their preferred area of study.</p>
                        </Zoom>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default AboutContent
