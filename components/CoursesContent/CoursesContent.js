import React from 'react'
import Zoom from 'react-reveal/Zoom';

import styles from './CoursesContent.module.scss';
import LinkButton from '../UI/LinkButton/LinkButton';

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
                <Zoom>
                    <div className={styles.OnlineCourses}>
                        <h2>Online Courses</h2>
                        <p>
                        Our online course offering is designed to extend our services even to those who may not be able to join our physical sessions.
                        </p>
                    </div>
                </Zoom>
                <div className={styles.Courses}>
                    <Zoom>
                    <div className={styles.Course}>
                        <div className={styles.CourseImage}
                            style={{ backgroundImage: "url(/images/pro_cooker.jpg)" }}
                        ></div>
                        <div>
                            <h2>Professional Cookery</h2>
                            <p>
                                This qualification has been developed for professionals in the food preparation industry (hospitality). It brings together elements of food and drink preparation and supervision.
                            This qualification will professionalise the industry and is applicable to all sectors, from small restaurants to large-scale hotels. The qualification provides articulation with Gaming, Travel and other Tourism industries.</p>
                            <p>
                                The qualification is suitable for those wishing to enter the field of professional cookery.
                                This certificate programme is also suitable for people who have already worked as a cook/chef and want to upgrade their status to a professional chef.

                            </p>
                            <LinkButton href="/contact" label="Enrol Now" />
                        </div>
                    </div>
                    </Zoom>

                    <Zoom>
                        <div className={styles.Course}>
                            <div className={styles.CourseImage}
                                style={{ backgroundImage: "url(/images/food_bev.jpg)" }}
                            ></div>
                            <div>
                                <h2>Food & Beverage Services</h2>
                                <p>
                                Food and Beverage Services is the process of preparing, presenting and serving of food and beverages to the customers.
                                Through this course, candidates gain an internationally recognised qualification and improve their career options.
                                
                                    </p>
                                    <LinkButton href="/contact" label="Enrol Now" />
                            </div>
                        </div>
                    </Zoom>

                    <Zoom>
                    <div className={styles.Course}>

                        <div className={styles.CourseImage}
                            style={{ backgroundImage: "url(/images/accommodation.jpg)" }}
                        ></div>
                        <div>
                            <h2>Accommodation Services</h2>
                            <p>This qualification has been developed for the accommodation industry. It brings together all aspects of housekeeping and basic supervision. This qualification will professionalise the industry and is applicable to all sectors, from small bed and breakfast to large-scale hotels.</p>
                            <LinkButton href="/contact" label="Enrol Now" />
                        </div>


                    </div>
                    </Zoom>
                </div>
            </main>
        </section>
    )
}

export default CoursesContent
