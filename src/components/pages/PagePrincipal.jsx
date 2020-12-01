import React, { Fragment } from 'react';
import AboutUs from './PagesPrincipal/AboutUs';
import Services from './PagesPrincipal/Services';
import TitlePrincipal from './PagesPrincipal/TitlePrincipal';

const PagePrincipal = () => {

    return (
        <Fragment>
            <TitlePrincipal />
            <main>
                <AboutUs />
                <Services />
            </main>
        </Fragment>
    )
}

export default PagePrincipal;