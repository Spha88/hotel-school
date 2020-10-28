import React from 'react'

import styles from './HomeContent.module.scss'
import AboutFrontPage from './AboutFrontPage/AboutFrontPage'
import GalleryCampusLife from './GalleryCampusLife/GalleryCampusLife'
import CoursesLink from './CoursesLink/CoursesLink'
import ContactLink from './ContactLink/ContactLink'
import CampusLife from './CampusLife/CampusLife'
import Testimonials from './TestimonialsTwo/Testimonials'

const HomeContent = () => {
    return (
        <div className={styles.HomeContent}>
            <AboutFrontPage />
            <GalleryCampusLife />
            <CoursesLink />
            <ContactLink />
            <CampusLife />
            <Testimonials />
        </div>
    )
}

export default HomeContent
