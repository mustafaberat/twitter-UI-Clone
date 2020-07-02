// BASE BUTTON
import React from 'react';

import classNamesMerger from 'classnames'

import styles from './button.module.css';

function Button({ children, className, ...props }) {
    return <button className={classNamesMerger(styles.button, className)} {...props} type="button">{children}</button>
}
export default Button