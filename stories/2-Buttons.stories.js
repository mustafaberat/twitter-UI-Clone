import React from 'react';

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";

export default {
    title: 'Buttons',
};

export const BasicButton = () => (<Button>Basic Button</Button>);
export const NavButton = () => (<NavigationButton>Nav Button</NavigationButton>);
export const Nav = () => (<Navigation />);
