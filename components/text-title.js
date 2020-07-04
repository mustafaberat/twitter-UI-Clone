import React from 'react';

import classNamesMerger from 'classnames'

import styles from './text-title.module.css'

export default function titleBold({ bold = true, children }) {
    return <h2 className={classNamesMerger([styles.title, bold && styles.bold])}>{children}</h2>
}