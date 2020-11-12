import React, { useState, useEffect } from 'react'

import styles from './PageLoader.module.scss';

const PageLoader = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [loading])

    return (
        <div className={`${styles.PageLoader} ${!loading && styles.StopLoading}`}>
            <h3>Page Loading</h3>
        </div>
    )
}

export default PageLoader
