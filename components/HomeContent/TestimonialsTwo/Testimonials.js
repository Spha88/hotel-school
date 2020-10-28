import React, { Component } from "react";
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
            <div className={styles.Pattern}>
            </div>
            <div className={styles.TestimonialsContent}>
                <header>
                    <h2>Testimonials</h2>
                </header>
                <div className={styles.TestimonialsContainer}>
                    <Slider {...settings}>
                        <div className={styles.Slide}>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste ad aspernatur exercitationem. Voluptate at quia cumque itaque rerum, ad corporis iusto distinctio nulla porro maxime odit reiciendis placeat soluta consectetur</p>
                            <h3>S Mehlomakulu</h3>
                        </div>
                        <div className={styles.Slide}>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste ad aspernatur exercitationem. Voluptate at quia cumque itaque rerum, ad corporis iusto distinctio nulla porro maxime odit reiciendis placeat soluta consectetur</p>
                            <h3>J Doe</h3>
                        </div>
                        <div className={styles.Slide}>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste ad aspernatur exercitationem. Voluptate at quia cumque itaque rerum, ad corporis iusto distinctio nulla porro maxime odit reiciendis placeat soluta consectetur</p>
                            <h3>J Smith</h3>
                        </div>
                    </Slider></div></div>
        </section>
    );

}