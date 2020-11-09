import React from 'react'
import { Link as ScrollToLink } from 'react-scroll';

import styles from './GalleryCampusLife.module.scss'
import Link from 'next/link';

const GalleryCampusLife = () => {

    return (
        <div className={styles.GalleryCampusLife}>
            <div className={styles.GalleryLink} style={{ backgroundImage: "url(/images/gallery_bg.jpeg" }}>
                <Link href="/gallery">
                    <a className={styles.LinkTile}></a>
                </Link>
            </div>
            <div className={styles.CampusLifeLink}>
                <ScrollToLink
                    to="campus-life-section"
                    offset={-50}
                    duration={1000}
                >
                    <a className={styles.LinkTile}>Campus Life</a>
                </ScrollToLink>
            </div>
            <div
                className={styles.Video}
                style={{ backgroundImage: "url(/images/video_placeholder.jpg)" }}
            >
                <video width="100%" width="500px" height="100%" autoPlay muted>
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default GalleryCampusLife
