import React from 'react'

import styles from './CampusLife.module.scss'
import Container from '../../UI/Container';

const CampusLife = () => {
    return (
        <section className={styles.CampusLife}>
            <Container>
                <header>
                    <h2>Campus Life</h2>
                </header>
                <main>
                    <div className={styles.CampusLifeImages}>
                        <div className={styles.Tile1}
                            style={{ backgroundImage: "url(/images/campus1.jpeg)" }}></div>
                        <div className={styles.Tile1}
                            style={{ backgroundImage: "url(/images/campus2.jpeg)" }}></div>
                        <div className={styles.Tile1}
                            style={{ backgroundImage: "url(/images/campus3.jpeg)" }}></div>
                        <div className={styles.Tile1}
                            style={{ backgroundImage: "url(/images/campus4.jpeg)" }}></div>
                    </div>
                    <div className={styles.Content}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia, obcaecati quis aspernatur quaerat eum omnis id. Ex esse, quos asperiores amet maiores vero ea beatae sequi totam quibusdam alias quas, vel non, quisquam nobis aut accusamus eveniet eius omnis atque recusandae libero ipsam veritatis. Iste, libero blanditiis! Molestiae, doloribus.</p>
                    </div>
                </main>
            </Container>
        </section>
    )
}

export default CampusLife
