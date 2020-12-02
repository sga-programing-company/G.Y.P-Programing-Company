import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../../../style/PagesPrincipalStyle/ServiceStyle/Service.css'

const Service = ({ title, images, seo, contenet, link }) => {
    return (
        <Fragment>
            <article>
                <div className='service_main'>
                    <h3>{title}</h3>
                    <figure>
                        <img src={images} alt={seo} title={seo} />
                        <figcaption>
                            <p>{contenet}</p>
                        </figcaption>
                    </figure>
                    <div>
                        <p>
                            <Link to={link}>VER MÁS</Link>
                        </p>
                    </div>
                </div>
            </article>
        </Fragment>
    )
}
export default Service;