import React from 'react';

import TextTitle from '../components/text-title'

export default {
    title: 'Typography',
};

export const Titles = () => (
    <div>
        <TextTitle>I'm Bold</TextTitle>
        <TextTitle bold={false}>I'm Normal</TextTitle>
    </div>
);
