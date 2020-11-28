import React, { Fragment } from 'react';
import AboutUs from './PagesPrincipal/AboutUs';
import TitlePrincipal from './PagesPrincipal/TitlePrincipal';

const PagePrincipal = () => {
    return (
        <Fragment>
            <TitlePrincipal />
            <main>
                <AboutUs />
            </main>
        </Fragment>
    )
}

export default PagePrincipal;