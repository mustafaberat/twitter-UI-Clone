import React from 'react';

import CONST from '../constants/variables'
import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
    const size = useWindowSize();

    return (
        <Layout>
            <div fate={size.width < CONST.DESKTROP_SIZE}>Sidebar</div>
            <div>{JSON.stringify(size)}</div>
            {size.width > CONST.TABLET_SIZE && <div>Extra</div>}
        </Layout>
    )
}

export default HomePage