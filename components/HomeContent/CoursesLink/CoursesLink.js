import React from 'react'
import Link from 'next/link'

import styles from './CoursesLink.module.scss';

const CoursesLink = () => {
    return (
        <div className={styles.CoursesLink}>
            <div className={styles.ImageOne}
                style={{ backgroundImage: "url(/images/image_one.jpg)" }}
            ></div>

            <div className={styles.Course}>
                <Link href="/courses">
                    <a className={styles.LinkTile}>Our Courses</a>
                </Link>
            </div>

            <div className={styles.ImageTwo}
                style={{ backgroundImage: "url(/images/image_two.jpg)" }}
            ></div>

        </div>
    )
}

export default CoursesLink
