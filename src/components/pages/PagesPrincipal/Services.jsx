import React, { Fragment } from 'react';
import Service from './services/Service'

const Services = () => {
    const s = [
        {
            title: 'PAGINAS WEB',
            images: 'http://ximg.es/200x200/000/fff&text=image',
            seo: 'paginas web - g.y.p programing team',
            contenet: 'hacemos paginas web con diseños modernos ,atractivos bastante intuitivo para los cliente ',
            link: '/services/paginas_web'
        }, {
            title: 'APLICACIONES MOVILES',
            images: 'http://ximg.es/200x200/000/fff&text=image',
            seo: 'aplicaciones moviles - g.y.p programing team',
            contenet: 'creamos aplicaciones moviles intuitivas y fasiles de utilizar para distintos tipos de usuarios',
            link: '/services/aplicaciones_moviles'
        }, {
            title: 'SOPORTE PARA TUS PAGINAS WEB',
            images: 'http://ximg.es/200x200/000/fff&text=image',
            seo: 'soporte de webs - g.y.p programing team',
            contenet: 'actualizamos y mejoramos tus paginas web cuando tu deses y solucionado errores previos ',
            link: '/services/soporte'
        }
    ]
    return (
        <Fragment>
            <section>
                <div>
                    <h2>NUESTROS SERVICIOS</h2>
                    <Service title={s[0].title} images={s[0].images} seo={s[0].seo} contenet={s[0].contenet} link={s[0].link} />
                    <Service title={s[1].title} images={s[1].images} seo={s[1].seo} contenet={s[1].contenet} link={s[1].link} />
                    <Service title={s[2].title} images={s[2].images} seo={s[2].seo} contenet={s[2].contenet} link={s[2].link} />
                </div>
            </section>
        </Fragment>
    )
}
export default Services;