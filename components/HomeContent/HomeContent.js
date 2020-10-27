import React from 'react'

import styles from './HomeContent.module.scss'
import AboutFrontPage from './AboutFrontPage/AboutFrontPage'
import GalleryCampusLife from './GalleryCampusLife/GalleryCampusLife'

const HomeContent = () => {
    return (
        <div className={styles.HomeContent}>
            <AboutFrontPage />
            <GalleryCampusLife />
        </div>
    )
}

export default HomeContent
