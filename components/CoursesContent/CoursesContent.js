import React from 'react'
import Link from 'next/link';
import styles from './CoursesContent.module.scss';

const CoursesContent = () => {
    return (
        <section className={styles.CoursesContent}>
            <header>
                <h2>Our Course</h2>
            </header>
            <main>
                <div className={styles.RegistrationDate}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                        <h3>Registration Starts:</h3>
                        <p className={styles.Date}>
                            November 2020
                        </p>
                        <p>
                            Only one intake per year
                        </p>
                    </div>
                </div>
                <div className={styles.Courses}>
                    <div className={styles.Course}>
                        <div className={styles.CourseImage}
                            style={{ backgroundImage: "url(/images/gallery_bg.jpg)" }}
                        ></div>
                        <div>
                            <h2>Professional Cookery</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt suscipit perspiciatis veniam numquam, esse recusandae officiis magni excepturi illo corrupti earum et dolorem, quisquam atque quod ab quaerat nemo ullam?
                                </p>
                            <Link href="/contact">
                                <a>Book Now</a>
                            </Link>
                        </div>

                    </div>
                    <div className={styles.Course}>

                        <div className={styles.CourseImage}
                            style={{ backgroundImage: "url(/images/food_bev.jpg)" }}
                        ></div>
                        <div>
                            <h2>Food & Beverage Services</h2>
                            <p>
                                Sunt suscipit perspiciatis veniam numquam, esse recusandae officiis magni excepturi illo corrupti earum et dolorem, quisquam atque quod ab quaerat nemo ullam?
                                </p>
                            <Link href="/contact">
                                <a>Book Now</a>
                            </Link>
                        </div>


                    </div>
                    <div className={styles.Course}>

                        <div className={styles.CourseImage}
                            style={{ backgroundImage: "url(/images/accommodation.jpg)" }}
                        ></div>
                        <div>
                            <h2>Accommodation Services</h2>
                            <p>
                                Ipsum dolor sit, amet consectetur adipisicing elit. Sunt suscipit perspiciatis veniam numquam, esse recusandae officiis magni excepturi illo corrupti earum et dolorem, quisquam atque quod ab quaerat nemo ullam?
                                </p>
                            <Link href="/contact">
                                <a>Book Now</a>
                            </Link>
                        </div>


                    </div>
                </div>
            </main>
        </section>
    )
}

export default CoursesContent
