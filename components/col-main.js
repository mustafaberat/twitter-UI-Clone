import React from 'react';

import classNameMerger from 'classnames'

import styles from './col-main.module.css'

function Main({ children }) {
    return (
        <div className={classNameMerger(styles.main)}>
            {children}
        </div>
    )
}

export default Main;