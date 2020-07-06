import React from 'react';

import classNameMerger from 'classnames'

import styles from './layout.module.css'

function Layout({ children }) {
    return (
        <div className={classNameMerger(styles.layout)}>
            {children}
        </div>
    )
}

export default Layout;