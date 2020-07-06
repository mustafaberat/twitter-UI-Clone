import React from 'react';

import classNameMerger from 'classnames'

import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'

import styles from './col-sidebar.module.css'

function Sidebar({ flat }) {
    return (
        <div className={classNameMerger(styles.sidebar)}>
            <Navigation flat />
            <ThemeButton big full> Tweet </ThemeButton>
            <ProfileBox />

        </div>
    )
}

export default Sidebar;