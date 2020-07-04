// BASE BUTTON
import React from 'react';

import classNameMerger from 'classnames'

import Button from './button'
import styles from './theme-button.module.css';

function ThemeButton({ full = false, big = false, className, children, ...props }) {
    return (
        <Button className={classNameMerger(styles.button, className, full && styles.full, big && styles.big)} {...props}>
            {children}
        </Button>)
}
export default ThemeButton