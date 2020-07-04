import React from 'react';

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import ThemeButton from "../components/theme-button";
import Navigation from "../components/navigation";
import Stack from "../components/stack";
import { Home } from '../components/icons/index';
import TitleBold from '../components/text-title';


export default {
    title: 'Buttons',
};

export const BasicButton = () => (<Button>Basic Button</Button>);

export const GeneralButtons = () => (
    <div>
        <Stack column gap={20}>
            <ThemeButton>Theme Button</ThemeButton>
            <ThemeButton full>Full Theme Button</ThemeButton>
            <ThemeButton full big>Big Theme Button</ThemeButton>
        </Stack>

        <NavigationButton>
            <Home />
            <TitleBold>Sample Home Button</TitleBold>
        </NavigationButton>
        <NavigationButton>
            <TitleBold>Only Text Button</TitleBold>
        </NavigationButton>
        <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ color: "white", marginRight: 20 }}>Only Icon: </h2>
            <NavigationButton>
                <Home />
            </NavigationButton>
        </div>
    </div>
);

export const NavigationTotal = () => (<Navigation selectedKey="home" />);
