import React from 'react';

import classNameMerger from 'classnames'

import styles from './col-sidebar.module.css'

function Sidebar({ children }) {
    return (
        <div className={classNameMerger(styles.sidebar)}>
            {children}
        </div>
    )
}

export default Sidebar;