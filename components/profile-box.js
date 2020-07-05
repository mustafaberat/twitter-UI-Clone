import React from 'react';
import classNameMerger from 'classnames'

import styles from './profile-box.module.css'

import Button from './button'
import Avatar from './avatar'
import TextBody from './text-body'
import { ArrowBottom } from './icons'

function ProfileBox({ name = 'Mustafa Berat', slug = 'mustafaberatt' }) {
    return (
        <Button className={classNameMerger([styles.box])}>
            <Avatar src='https://avatars0.githubusercontent.com/u/32976555?s=460&u=47a63045b998391c5cc15d13598a3bfa0df0b10d&v=4' />
            <div className={styles.body}>
                <TextBody bold>{name}</TextBody>
                <TextBody className={styles.slug} >@{slug}</TextBody>
            </div>
            <ArrowBottom className={styles.icon} />
        </Button>
    )
}

export default ProfileBox;