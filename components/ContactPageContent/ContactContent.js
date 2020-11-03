import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import styles from './ContactContent.module.scss';


const ContactContent = () => {
    return (
        <section className={styles.ContactContent}>
            <header>
                <h1>Contact Us</h1>
            </header>
            <ContactForm />
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874.5263003980051!2d24.77477382922384!3d-28.74627582307386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ0JzQ2LjYiUyAyNMKwNDYnMzEuMiJF!5e0!3m2!1sen!2sza!4v1604430601068!5m2!1sen!2sza" width="100%" height="450" frameBorder="0" style={{ border: '1px solid' }} allowFullScreen={true} aria-hidden={false} tabIndex="0"></iframe>
            </div>
        </section>
    )
}

export default ContactContent
