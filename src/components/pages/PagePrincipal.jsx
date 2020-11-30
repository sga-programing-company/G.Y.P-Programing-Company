import React, { Fragment } from 'react';
import AboutUs from './PagesPrincipal/AboutUs';
import Services from './PagesPrincipal/Services';
import TitlePrincipal from './PagesPrincipal/TitlePrincipal';

const PagePrincipal = () => {
    const services = [
        {
            title: 'PAGINAS WEB',
            images: 'http://ximg.es/300x200/000/fff&text=image',
            seo: 'paginas web - g.y.p programing team',
            contenet: 'hacemos paginas web con diseños modernos ,atractivos bastante intuitivo para los cliente ',
            link: '/services/paginas_web'
        }, {
            title: 'APLICACIONES MOVILES',
            images: 'http://ximg.es/300x200/000/fff&text=image',
            seo: 'aplicaciones moviles - g.y.p programing team',
            contenet: 'creamos aplicaciones moviles intuitivas y fasiles de utilizar para distintos tipos de usuarios',
            link: '/services/aplicaciones_moviles'
        }, {
            title: 'SOPORTE PARA TUS PAGINAS WEB',
            images: 'http://ximg.es/300x200/000/fff&text=image',
            seo: 'soporte de webs - g.y.p programing team',
            contenet: 'actualizamos y mejoramos tus paginas web cuando tu deses y solucionado errores previos ',
            link: '/services/soporte'
        }
    ]
    return (
        <Fragment>
            <TitlePrincipal />
            <main>
                <AboutUs />
                <section>
                    <Services title={services[0].title} images={services[0].images} seo={services[0].seo} contenet={services[0].contenet} link={services[0].link} />
                    <Services title={services[1].title} images={services[1].images} seo={services[1].seo} contenet={services[1].contenet} link={services[1].link} />
                    <Services title={services[2].title} images={services[2].images} seo={services[2].seo} contenet={services[2].contenet} link={services[2].link} />
                </section>
            </main>
        </Fragment>
    )
}

export default PagePrincipal;