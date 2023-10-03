import '../App.css'
import { Link, NavLink, useNavigate, } from 'react-router-dom';

const About = () => {
    return (
        <>
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-1 col-6 order-md-1 order-1">
                                    <div className="header__humberger">
                                        <i className="fa fa-bars humberger__open"></i>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-10 order-md-2 order-3">
                                    <nav className="header__menu">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="Recipes">Recipes</a></li>
                                            <li><a href="About">About</a></li>
                                            <li className="active"><a href="Contact">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-lg-2 col-md-1 col-6 order-md-3 order-2">
                                    <div className="header__search">
                                        <i className="fa fa-search search-switch"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md col-md-2-3">
                            </div>
                            <div className="col-lg-6 col-md col-md-2-6">
                                <div className="header__logo">
                                    <a href="/"><img src="logo.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="about spad">
                    <div className="container">
                        <div className="about__text">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb__text">
                                        <h2>About me</h2>
                                        <div className="breadcrumb__option">
                                            <a href="#">Home</a>
                                            <span>About</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about__pic__item__large">
                                        <img src="about/about-1.jpg" alt="" />
                                    </div>
                                    <div className="about__pic">
                                        <div className="about__pic__item">
                                            <img src="about/about-2.jpg" alt="" />
                                        </div>
                                        <div className="about__pic__item">
                                            <img src="about/about-3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about__right__text">
                                        <h2>Hello every one !!!</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit, incididunt ut labore et dolore magna aliqua accusantium doloremque
                                            laudantium.
                                        </p>
                                        <ul>
                                            <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra</li>
                                            <li>Inceptos himenaeos mauris.Integer gravida tincidunt accumsan.</li>
                                            <li>Vestibulum nulla mauris, condimentum id felis ac, volutpat volutpat mi.</li>
                                            <li>In vitae tempor velit of the impenetrable foliage.</li>
                                        </ul>
                                        <p>
                                            Vestibulum commodo nulla eu augue tincidunt rutrum. Suspendisse interdum lacus in ligula
                                            finibus luctus. Vivamus mollis libero vel orci finibus, sit amet malesuada lectus aliquam. In
                                            auctor viverra eros. Maecenas elit mi, consectetur nec, sollicitudin sed arcu. Curabitur tempor
                                            tempor pharetra ridiculus mus porta tincidunt, purus enim laoreet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="footer__instagram">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                                    <div className="footer__instagram__item set-bg-19" data-setbg="footer/ip-1.jpg"></div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                                    <div className="footer__instagram__item set-bg-20" data-setbg="footer/ip-2.jpg"></div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                                    <div className="footer__instagram__item set-bg-21" data-setbg="footer/ip-3.jpg"></div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                                    <div className="footer__instagram__item set-bg-22" data-setbg="footer/ip-4.jpg"></div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                                    <div className="footer__instagram__item set-bg-23" data-setbg="footer/ip-5.jpg"></div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                                    <div className="footer__instagram__item set-bg-24" data-setbg="footer/ip-6.jpg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer__text">
                                    <div className="footer__logo">
                                        <a href="#"><img src="logo.png" alt="" /></a>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                        commodo viverra maecenas accumsan lacus vel facilisis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="search-model">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
            </body>
        </>
    )
}
export default About;



