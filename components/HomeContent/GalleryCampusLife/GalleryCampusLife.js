import React from 'react'
import styles from './GalleryCampusLife.module.scss'
import Link from 'next/link';

const GalleryCampusLife = () => {

    return (
        <div className={styles.GalleryCampusLife}>
            <div className={styles.GalleryLink} style={{ backgroundImage: "url(/images/gallery_bg.jpg" }}>
                <Link href="/gallery">
                    <a className={styles.LinkTile}></a>
                </Link>
            </div>
            <div className={styles.CampusLifeLink}>
                <Link href="/campus-life">
                    <a className={styles.LinkTile}>Campus Life</a>
                </Link>
            </div>
            <div
                className={styles.Video}
                style={{ backgroundImage: "url(/images/video_placeholder.jpg)" }}
            >
                <video width="100%" height="100%" loop autoPlay muted>
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default GalleryCampusLife
