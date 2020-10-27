import React from 'react'
import AboutFrontPage from './AboutFrontPage/AboutFrontPage'

import styles from './HomeContent.module.scss'

const HomeContent = () => {
    return (
        <div className={styles.HomeContent}>
            <AboutFrontPage />
        </div>
    )
}

export default HomeContent
