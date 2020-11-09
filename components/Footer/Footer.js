import React from 'react';
import styles from './Footer.module.scss';

const FooterComponent = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.ContactDetails}>
                <ul>
                    <li><a href="tel:+0712049687"><i className="material-icons">phone</i> 071 204 9687</a></li>
                    <li><a href="mailto:enquiries@shprevenance.co.za"><i className="material-icons">mail</i>enquiries@shprevenance.co.za</a></li>
                </ul>
            </div>
            <div className={styles.Developer}>
                <a href="http://www.netslate.co.za">Designed and Developed @<br />Netslate</a>
            </div>
        </footer>
    )
}

export default FooterComponent
