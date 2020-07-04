import React from 'react';

import classNameMerger from 'classnames'

import styles from './stack.module.css'

function Stack({ gap = 10, column = false, children }) {
    return (
        <div className={classNameMerger([styles.stack, column && styles.column])}
            style={{ '--gap': `${gap}px` }}>
            {children}
        </div>
    )
}

export default Stack;