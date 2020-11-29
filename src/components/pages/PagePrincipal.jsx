import React, { Fragment } from 'react';
import AboutUs from './PagesPrincipal/AboutUs';
import Services from './PagesPrincipal/Services';
import TitlePrincipal from './PagesPrincipal/TitlePrincipal';

const PagePrincipal = () => {
    const services = [
        {
            title: 'PAGINAS WEB',
            images: '../../images/02.jpg',
            seo: 'paginas web - g.y.p programing team',
            contenet: 'hacemos paginas web con diseños modernos ,atractivos bastante intuitivo para los cliente ',
            link: '/services/paginas_web'
        }, {
            title: 'APLICACIONES MOVILES',
            images: '../../images/02.jpg',
            seo: 'aplicaciones moviles - g.y.p programing team',
            contenet: 'creamos aplicaciones moviles intuitivas y fasiles de utilizar para distintos tipos de usuarios',
            link: '/services/aplicaciones_moviles'
        }, {
            title: 'SOPORTE PARA TUS PAGINAS WEB',
            images: '../../images/02.jpg',
            seo: 'soporte de webs - g.y.p programing team',
            contenet: 'actualizamos tus paginas web cuando tu deses y solucionado errores previos ',
            link: '/services/soporte'
        }
    ]
    return (
        <Fragment>
            <TitlePrincipal />
            <main>
                <AboutUs />
                <Services title={services[0].title} images={services[0].images} seo={services[0].seo} contenet={services[0].contenet} link={services[0].link} />
            </main>
        </Fragment>
    )
}

export default PagePrincipal;