import React from 'react'
import Link from 'next/link';
import styles from './ContactLink.module.scss';

const ContactLink = () => {
    return (
        <div className={styles.ContactLink}>
            <div className={styles.TileOne} style={{ backgroundImage: "url(/images/conversation.jpg)" }}></div>
            <div className={styles.TileTwo}>
                <Link href="/contact">
                    <a className={styles.LinkTile}><span>Contact Us  <br /> <i class="fas fa-map-marker-alt"></i></span></a>
                </Link>
            </div>
            <div className={styles.TileThree} style={{ backgroundImage: "url(/images/flowers.jpg)" }}></div>
            <div className={styles.TileFour} style={{ backgroundImage: "url(/images/table_one.jpg)" }}></div>
        </div>
    )
}

export default ContactLink
