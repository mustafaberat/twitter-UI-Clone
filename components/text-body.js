import React from 'react';

import classNamesMerger from 'classnames'

import styles from './text-body.module.css'

export default function titleBold({ bold = false, className, children, ...props }) {
    return <span className={classNamesMerger([styles.body, bold && styles.bold, className])} {...props}>
        {children}
    </span>
}