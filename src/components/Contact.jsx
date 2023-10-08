import '../App.css'

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
                                            <li><a href="/">Главная</a></li>
                                            <li><a href="Recipes">Рецепты</a></li>
                                            <li><a href="About">Обо мне</a></li>
                                            <li className="active"><a href="Contact">Контакты</a></li>
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

                <section className="contact spad">
                    <div className="container">
                        <div className="contact__text">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb__text">
                                        <h2>Контакты</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="contact__map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.74000771341!2d76.92945111226635!3d43.256870471003246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eba50dc1d0d%3A0xd4c161a3ca935ec6!2z0L_RgC3Rgi4g0KHQtdC50YTRg9C70LvQuNC90LAgNTIxLCDQkNC70LzQsNGC0YsgMDUwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1696668621697!5m2!1sru!2skg%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade%22"
                                            height="350"
                                            style={{ border: '0' }}
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                        ></iframe>

                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="contact__form">
                                        <div className="contact__form__title">

                                            <h2>Мой контакты </h2>
                                            <p>
                                                <a href=""><h5>+7 777 777 77 77 <span>Аружан</span></h5></a>
                                                <a href=""><h4>Arujan@gmail.com</h4></a>
                                                <a href=""><h4>Arujan@mail.ru</h4></a>
                                            </p>
                                        </div>
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
                                        Соблюдение принципов здорового питания под силу каждому. Прочитайте приведенные ниже правила и возьмите их за основу при планировании своего питания — и первый шаг к здоровому питанию и образу жизни будет сделан.
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



