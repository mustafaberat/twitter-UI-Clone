import React from 'react';

import CONST from '../constants/variables'
import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

function HomePage() {
    const size = useWindowSize();

    return (
        <Layout>
            <Sidebar fate={size.width < CONST.DESKTROP_SIZE}>Sidebar</Sidebar>
            <Main>{JSON.stringify(size)}</Main>
            {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
        </Layout>
    )
}

export default HomePage