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
                                            <li className="active"><a href="About">Обо мне</a></li>
                                            <li><a href="Contact">Контакты</a></li>
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
                                        <h2>Обо мне</h2>                                        
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
                                        <h2>Всем привет! <br /> Меня зовут Аружан</h2>
                                        <p>
                                        Изначально, я искала подобный сайт, чтобы научиться готовить. Спустя некоторое время, я поняла, что нет такой платформы, которая бы меня устроила. В итоге, я пришла к мнению, что создать свой продукт, где каждый может найти нужный ему рецепт.
                                        </p>
                                        <ul><p>Вот почему я создала данное веб приложение:</p>
                                            <li>Удобное</li>
                                            <li>Интересное</li>
                                            <li>Практичная</li>
                                            <li>Крос браузерная</li>
                                        </ul>
                                        <p>
                                        Правильное питание способствует сохранению здоровья, 
                                        поддержанию хорошей физической и умственной работоспособности, 
                                        высокой сопротивляемости организма к воздействию вредных факторов окружающей среды и активному долголетию.
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
                                    <p>Соблюдение принципов здорового питания под силу каждому. Прочитайте приведенные ниже правила и возьмите их за основу при планировании своего питания — и первый шаг к здоровому питанию и образу жизни будет сделан.
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



