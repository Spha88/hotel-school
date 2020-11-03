import React from 'react'
import styles from './ContactForm.module.scss'

const ContactForm = () => {
    return (
        <form className={styles.ContactForm}>
            <div className={styles.FormGroupItems}>
                <div className={styles.FormGroupItem}>
                    <label htmlFor="name">Name</label>
                    <i className="material-icons">account_circle</i>
                    <input type="text" name="name" placeholder="Enter your name" />
                    <div className={styles.Error}></div>
                </div>
                <div className={styles.FormGroupItem}>
                    <label htmlFor="email">Email</label>
                    <i className="material-icons">email</i>
                    <input type="text" name="email" placeholder="Enter your email" />
                    <div className={styles.Error}></div>
                </div>
            </div>

            <div className={styles.FormGroup}>
                <label htmlFor="phone">Phone</label>
                <i className="material-icons">phone</i>
                <input type="text" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className={styles.FormGroup}>
                <label htmlFor="phone" className={styles.TextareaLabel}>Enter your message</label>
                <div className={styles.Error}></div>
                <i className={`material-icons ${styles.inTextArea}`}>message</i>
                <textarea name="message" cols="30" rows="10"></textarea>
            </div>
            <div className={styles.SendBtnContainer}>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default ContactForm
