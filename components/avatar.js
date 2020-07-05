import React from 'react';

import classNameMerger from 'classnames'

import styles from './avatar.module.css'

function Avatar({ alt = 'image', children,
    src = 'https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png?w=900&h=900&crop=1&strip=all&quality=75', //egg
}) {
    return (
        <div className={classNameMerger([styles.photo])}>
            <img className={styles.img} src={src} alt={alt} />
            {children}
        </div>
    )
}

export default Avatar;