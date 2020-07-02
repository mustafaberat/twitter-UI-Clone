// BASE BUTTON
import React from 'react';

import classNameMerger from 'classnames'

import Button from './button'
import styles from './navigation-button.module.css';

function NavButton({ selected, children, ...props }) {
    return (
        <Button className={classNameMerger(styles.navButton, selected && styles.navButtonSelected)} {...props}>
            {children}
        </Button>)
}
export default NavButton