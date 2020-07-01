import React from 'react';

import Button from "../components/button";
import NavButton from "../components/nav-button";
import Navigation from "../components/navigation";

export default {
    title: 'Buttons',
};

export const BasicButton = () => (<Button>Basic</Button>);
export const Menu = () => (<NavButton>Menu</NavButton>);
export const Nav = () => (<Navigation />);
