import React, { Fragment } from 'react'
import '../style/Footer.css'

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className='footer_main'>
                    <div>
                        <div>
                            <a href="whatsapp://send?text=Hola, Index.pe&phone=+57 319 3054761&abid=+57 319 3054761">
                                <i className="fab fa-whatsapp-square"></i>
                                +57 319 3054761
                            </a>
                        </div>
                        <div>
                            <a href="whatsapp://send?text=Hola, Index.pe&phone=+57 314 2350353&abid=+57 314 2350353">
                                <i className="fab fa-whatsapp-square"></i>
                                +57 314 2350353
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href='https://www.facebook.com' target='_blanck'>
                                <i className="fab fa-facebook-square"></i>
                                facebook
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href='https://www.instagram.com' target='_blanck'>
                                <i className="fab fa-instagram-square"></i>
                                instagram
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href='mailto:prueba@gmail.com'>
                                <i className='fas fa-envelope-square'></i>
                                prueba@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;