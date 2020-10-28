import React from 'react'

import styles from './HomeContent.module.scss'
import AboutFrontPage from './AboutFrontPage/AboutFrontPage'
import GalleryCampusLife from './GalleryCampusLife/GalleryCampusLife'
import CoursesLink from './CoursesLink/CoursesLink'
import ContactLink from './ContactLink/ContactLink'
import CampusLife from './CampusLife/CampusLife'

const HomeContent = () => {
    return (
        <div className={styles.HomeContent}>
            <AboutFrontPage />
            <GalleryCampusLife />
            <CoursesLink />
            <ContactLink />
            <CampusLife />
        </div>
    )
}

export default HomeContent
