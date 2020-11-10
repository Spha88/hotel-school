import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import validator from 'validator';
import axios from 'axios';

import styles from './ContactForm.module.scss';
import Modal from '../../UI/Modal/Modal';


const ContactForm = () => {

    const [openModal, setOpenModal] = useState(false);
    const [responseMsg, setResponseMsg] = useState('');
    const { register, handleSubmit, errors, trigger } = useForm();

    const close = () => setOpenModal(false);

    const submit = data => {
        // console.log(data);
        axios({
            method: 'post',
            url: 'form_handler.php',
            headers: { 'Content-type': 'application/json' },
            data: {
                name: data.name,
                number: data.phone,
                email: data.email,
                subject: 'Email enquiry from the website',
                message: data.message
            }
        })
            .then(res => {
                document.getElementById('contact-form').reset();
                setOpenModal(true);
                setResponseMsg(res.data.message);
                setTimeout(() => setOpenModal(false), 3000)
                // console.log(res);

            })
            .catch(error => {
                setOpenModal(true);
                // console.log(error);
                setResponseMsg("Message sent Thank you");
                setTimeout(() => setOpenModal(false), 3000);
            })
    }

    return (
        <form className={styles.ContactForm} onSubmit={handleSubmit(submit)}>
            <div className={styles.FormGroupItems}>
                {/** Name */}
                <div className={styles.FormGroupItem}>
                    <label htmlFor="name">Name</label>
                    <i className="material-icons">account_circle</i>
                    <input type="text" name="name" placeholder="Enter your name"
                        ref={register({
                            required: { value: true, message: 'Name is required.' },
                            minLength: { value: 2, message: 'Name too short.' },
                            maxLength: { value: 60, message: 'Your name is too long.' },
                            validate: value => validator.isAlpha(value.replace(/\s/g, '')) || 'Invalid characters, only alphabets allowed',
                        })}
                    />
                    <div className={styles.Error}>
                        <span> {errors?.name?.message}</span>
                    </div>
                </div>

                {/** Email */}
                <div className={styles.FormGroupItem}>
                    <label htmlFor="email">Email</label>
                    <i className="material-icons">email</i>
                    <input type="text" name="email" placeholder="Enter your email"
                        ref={register({
                            required: { value: true, message: 'Email is required' },
                            validate: email => validator.isEmail(email) || 'Invalid E-mail'
                        })}
                    />
                    <div className={styles.Error}>
                        <span> {errors?.email?.message} </span>
                    </div>
                </div>
            </div>

            {/** Phone number */}
            <div className={styles.FormGroup}>
                <label htmlFor="phone">Phone</label>
                <i className="material-icons">phone</i>
                <input type="text" name="phone" placeholder="Enter your phone number"
                    onBlur={() => { trigger('phone') }}
                    ref={register({
                        required: { value: true, message: 'Number is required.' },
                        minLength: { value: 10, message: 'Contact number too short.' },
                        maxLength: { value: 13, message: 'Your number is too long.' },
                        validate: phone => validator.isMobilePhone(phone, 'en-ZA') || 'Enter a valid contact number'
                    })}
                />
                <div className={styles.Error}>
                    <span> {errors?.phone?.message} </span>
                </div>
            </div>

            <div className={styles.FormGroup}>
                <label htmlFor="phone" className={styles.TextareaLabel}>Enter your message</label>
                <div className={styles.Error}>
                    <span>{errors?.message?.message}</span>
                </div>
                <i className={`material-icons ${styles.inTextArea}`}>message</i>
                <textarea name="message" cols="30" rows="10"
                    ref={register({
                        required: { value: true, message: 'Message is required.' },
                        minLength: { value: 2, message: 'Message too short.' },
                        maxLength: { value: 1000, message: 'Your name is too long.' },
                    })}
                ></textarea>
            </div>
            <div className={styles.SendBtnContainer}>
                <button>Send</button>
            </div>
            <Modal open={openModal} message={responseMsg} close={close} />
        </form>
    )
}

export default ContactForm
