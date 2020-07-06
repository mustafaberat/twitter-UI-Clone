import React from 'react';

import NavButton from './navigation-button';
import { Twitter, Home, Explore, Notification, Messages, Lists, Profile, More } from '../components/icons/index';
import TitleBold from '../components/text-title';

import styles from './navigation.module.css'

function Navigation({ flat = false, selectedKey }) {
    return (
        <nav className={styles.nav}>
            <NavButton>
                <Twitter />
            </NavButton>
            <NavButton selected={selectedKey === "home"}>
                <Home />
                <TitleBold>Home</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey === "explore"}>
                <Explore />
                <TitleBold>Explore</TitleBold>
            </NavButton>
            <NavButton notify={12} selected={selectedKey === "notification"}>
                <Notification />
                <TitleBold>Notification</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey === "messages"}>
                <Messages />
                <TitleBold>Messages</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey === "lists"}>
                <Lists />
                <TitleBold>Lists</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey === "profile"}>
                <Profile />
                <TitleBold>Profile</TitleBold>
            </NavButton>
            <NavButton selected={selectedKey === "more"}>
                <More />
                <TitleBold>More</TitleBold>
            </NavButton>
        </nav >
    )
}
export default Navigation