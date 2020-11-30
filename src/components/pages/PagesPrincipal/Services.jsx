import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../../style/Services.css'

const Services = ({ title, images, seo, contenet, link }) => {
    return (
        <Fragment>
            <article>
                <div className='services_main'>
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
export default Services;