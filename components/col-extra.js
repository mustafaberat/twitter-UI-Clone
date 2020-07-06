import React from 'react';

import classNameMerger from 'classnames'

import styles from './col-extra.module.css'

function Extra({ children }) {
    return (
        <div className={classNameMerger(styles.extra)}>
            {children}
        </div>
    )
}

export default Extra;