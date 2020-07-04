import React from 'react';
import Link from 'next/link'

import Button from '../components/button'

function HomePage() {
    return (
        <div>
            <h1>Hello world!</h1>
            <Link href="/ui/index.html">
                <Button>Go to UI Design Page</Button>
            </Link>
        </div>
    )
}

export default HomePage