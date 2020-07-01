// BASE BUTTON
import React from 'react';

import styles from './button.module.css';

function Button({ children, ...props }) {
    return <button className={styles.button} {...props} type="button">{children}</button>
}
export default Button