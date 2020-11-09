import React from 'react'

import styles from './AboutContent.module.scss';

const AboutContent = () => {
    return (
        <section className={styles.AboutContent}>
            <header>
                <h2>WE ARE PRÉVENANCE HOTEL SCHOOL</h2>
            </header>
            <main>
                <img src="/images/about1.jpeg" alt="wine and wine glasses" />
                <div className={styles.AboutContent}>
                    <div className={styles.Heading}>
                        <div className={styles.HeadingInner}>
                            <h2>OUR STORY</h2>
                            <div className={styles.Line}></div>
                        </div>
                    </div>
                    <div className={styles.Paragraph}>
                        <p>
                            Prévenance Hotel School is a professional academy focused on training students who intend to establish themselves as leaders in the hospitality industry.
                        </p>
                        <p>
                            Our students have a range of excellent courses to choose from. Through our intake program we help them find just the right course and career for their personality.
                        </p>
                        <p>
                            Have practical fun while learning, join us for best journey of your life!
                        </p>

                        <h2>Our history</h2>

                        <p>We started Prévenance Hotel School as a result of our passion for excellence in service.
                        Having been in the hospitality space for a number of years, it became clear that gaps and areas of improvement exist in our industry. We soon realised that no amount screaming, hiring and firing will improve the service offering by a number of hospitality establishments, from guest houses to hotels.
                        </p>

                        <p>Training of staff to take pride in what they do, became the only option. At the center of our curriculum is the intention to produce graduates that not only know what they do, but also take pride in their service and desire to only give their best.</p>

                        <p>We have no doubt of the great impact our academy will make in the lives and careers of many young people across our country and the continent.</p>
                    </div>
                </div>
                <img src="/images/about2.jpeg" alt="writing and studying" />
            </main>
        </section>
    )
}

export default AboutContent
