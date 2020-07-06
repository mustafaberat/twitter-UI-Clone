import React from 'react';

import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
    const size = useWindowSize();

    return (
        <Layout>
            <div fate={size.width < 1270}>Sidebar</div>
            <div>{JSON.stringify(size)}</div>
            {size.width > 980 && <div>Extra</div>}
        </Layout>
    )
}

export default HomePage