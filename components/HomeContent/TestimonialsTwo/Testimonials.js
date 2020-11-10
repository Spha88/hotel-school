import React from "react";
import Slide from 'react-reveal/Slide';

import Slider from "react-slick";
import styles from './Testimonials.module.scss'

export default function testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <section className={styles.Testimonials}>
            <Slide left >
                <div className={styles.Pattern}>
                </div>
            </Slide>
            <div className={styles.TestimonialsContent}>
                <header>
                    <h2>Testimonials</h2>
                </header>
                <div className={styles.TestimonialsContainer}>
                    <Slider {...settings}>
                        <div className={styles.Slide}>
                            <p>This is the space where we allow our students and members of the public who have experienced any of our range of services to leave a message.
                            We are more than delighted to receive feedback about how well or not so well, we are doing so we can either enhance or improve where necessary.
                            Feel free to share your message with us and it will be published here!</p>
                            <h3></h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );

}