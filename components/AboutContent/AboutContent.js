import React from 'react'

import styles from './AboutContent.module.scss';

const AboutContent = () => {
    return (
        <section className={styles.AboutContent}>
            <header>
                <h2>WE ARE PRÉVENANCE HOTEL SCHOOL</h2>
            </header>
            <main>
                <img src="/images/about1.jpg" alt="wine and wine glasses" />
                <div className={styles.AboutContent}>
                    <div className={styles.Heading}>
                        <div className={styles.HeadingInner}>
                            <h2>OUR STORY</h2>
                            <div className={styles.Line}></div>
                        </div>
                    </div>
                    <div className={styles.Paragraph}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis maiores vitae numquam dolore ducimus nemo maxime velit harum nesciunt, debitis sapiente asperiores animi magnam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium dolore iusto in ea consequuntur minima culpa quod inventore. Omnis eveniet, deleniti in voluptatum quo dolor laboriosam? Sed doloribus provident amet voluptates consectetur modi rem harum deleniti, reiciendis perspiciatis alias eos recusandae ipsam itaque exercitationem, assumenda saepe cupiditate aliquid adipisci!Omnis eveniet, deleniti in voluptatum quo dolor laboriosam? Sed doloribus provident amet voluptates consectetur modi rem harum deleniti, reiciendis perspiciatis
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nobis maxime necessitatibus hic veniam sit nostrum eius deserunt, ab vel debitis sequi molestiae ad voluptates aspernatur, neque repellendus! Necessitatibus deserunt, veniam officia harum dolore optio!
                        </p>
                    </div>
                </div>
                <img src="/images/about2.jpg" alt="writing and studying" />
            </main>
        </section>
    )
}

export default AboutContent
