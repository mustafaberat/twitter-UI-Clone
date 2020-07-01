import React from 'react';

import NavButton from './nav-button';
import { Twitter, Home } from '../components/icons/index';

import styles from './nav.module.css'

function Navigation() {
    return (
        <nav>
            <NavButton>
                <Twitter />
            </NavButton>
            <NavButton>
                <Home />
                <span>Home</span>
            </NavButton>
        </nav>
    )
}
export default Navigation