import React from 'react'
import Zoom from 'react-reveal/Zoom';

import styles from './CampusLife.module.scss'
import Container from '../../UI/Container';

const CampusLife = () => {
    return (
        <section className={styles.CampusLife} id="campus-life-section">
            <Container>
                <header>
                    <h2>Campus Life</h2>
                </header>
                <main>
                    <div className={styles.CampusLifeImages}>

                        <Zoom delay={400}>
                            <div className={styles.Tile1}
                                style={{ backgroundImage: "url(/images/campus2.jpg)" }}></div>
                        </Zoom>
                        <Zoom delay={600}>
                            <div className={styles.Tile1}
                                style={{ backgroundImage: "url(/images/campus3.jpg)" }}></div>
                        </Zoom>
                        <Zoom delay={800}>
                            <div className={styles.Tile1}
                                style={{ backgroundImage: "url(/images/campus3.jpeg)" }}></div>
                        </Zoom>
                        <Zoom delay={200}>
                            <div className={styles.Tile1}
                                style={{ backgroundImage: "url(/images/campus1.jpeg)" }}></div>
                        </Zoom>
                    </div>
                    <div className={styles.Content}>
                        <p>Given the diversity of cultures on our campuses, our aim is to create a vibrant, multicultural environment pinned on academic excellence and able to produce well-rounded graduates. As an institution committed to transformation, we work tirelessly to make sure everyone feels at home in all our campuses. Academic success is important, but student life is also about having fun and exploring your talents necessary for the world beyond your studies. We encourage all our students to give back and build up experience through our community engagement projects.</p>
                    </div>
                </main>
            </Container>
        </section>
    )
}

export default CampusLife
