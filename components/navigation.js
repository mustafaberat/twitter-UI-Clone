import React from 'react';

import NavButton from './navigation-button';
import { Twitter, Home, Explore, Notification, Messages, Lists, Profile, More } from '../components/icons/index';
import TitleBold from '../components/title-bold';

import styles from './navigation.module.css'

function Navigation() {
    return (
        <nav className={styles.nav}>
            <NavButton>
                <Twitter />
            </NavButton>
            <NavButton>
                <Home />
                <TitleBold>Home</TitleBold>
            </NavButton>
            <NavButton>
                <Explore />
                <TitleBold>Explore</TitleBold>
            </NavButton>
            <NavButton>
                <Notification />
                <TitleBold>Notification</TitleBold>
            </NavButton>
            <NavButton>
                <Messages />
                <TitleBold>Messages</TitleBold>
            </NavButton>
            <NavButton>
                <Lists />
                <TitleBold>Lists</TitleBold>
            </NavButton>
            <NavButton>
                <Profile />
                <TitleBold>Profile</TitleBold>
            </NavButton>
            <NavButton>
                <More />
                <TitleBold>More</TitleBold>
            </NavButton>
        </nav>
    )
}
export default Navigation