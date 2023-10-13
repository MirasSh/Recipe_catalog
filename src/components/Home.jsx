import '../App.css'

function Home() {

  return (
    <>
      <body>
        <header className="header">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
                      <li className="active"><a href="/">Главная</a></li>
                      <li><a href="Recipes">Рецепты</a></li>
                      <li><a href="About">Обо мне</a></li>
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
              <div className="col-lg-3 col-md-3">
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__logo">
                  <a href="/"><img src="logo.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="hero">
          <div className="hero__slider owl-carousel">
            <div className="hero__item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 p-0">
                    <div className="hero__inside__item hero__inside__item--wide set-bg-1" data-setbg="hero/hero-1.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Вегитарианские</li>
                            <li>Дисерты</li>
                          </ul>
                          <h4>Веганский коблер из белого персика в кружке с кардамоном<br /> Коблер из белого персика в кружке с кардамоном</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 p-0">
                    <div className="hero__inside__item hero__inside__item--small set-bg-2" data-setbg="hero/hero-3.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Вегитарианские</li>
                            <li>Дисерты</li>
                          </ul>
                          <h5>Молочный коктейль  <br />Любимые начинки</h5>
                        </div>
                      </div>
                    </div>
                    <div className="hero__inside__item hero__inside__item--small set-bg-3" data-setbg="hero/hero-2.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Вегитарианские</li>
                            <li>Дисерты</li>
                          </ul>
                          <h5>Молочные коктели</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 p-0">
                    <div className="hero__inside__item set-bg-4" data-setbg="hero/hero-4.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Вегитарианские</li>
                            <li>Дисерты</li>
                          </ul>
                          <h5>Салат из маринованной чечевицы с цуккини и помидорами</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="categories spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="categories__item set-bg-5" data-setbg="categories/cat-1.jpg"></div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="categories__item set-bg-6" data-setbg="categories/cat-2.jpg"></div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="categories__item set-bg-7" data-setbg="categories/cat-3.jpg"></div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="categories__item set-bg-8" data-setbg="categories/cat-4.jpg"></div>
              </div>
            </div>
          </div>
          <div className="categories__post">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <div className="categories__post__item categories__post__item--large">
                    <div
                      className="categories__post__item__pic set-bg-9"
                      data-setbg="categories/categories-post/cp-1.jpg"
                    ></div>
                    <div className="categories__post__item__text">
                      <ul className="post__label--large">
                        <li>Вегитарианские</li>
                        <li>Дисерты</li>
                      </ul>
                      <h3>
                        <a href="#">
                          Абсолютно лучший способ идеального приготовленного стейка, согласно большому количеству тестов
                        </a>
                      </h3>
                      <p>
                        Хороший стейк может стать настоящим удовольствием для гурманов. Однако, чтобы достичь идеальной степени прожарки и незабываемого вкуса,
                        важно придерживаться определенных правил при приготовлении.
                      </p>
                      <a href="Recipes" className="primary-btn">
                        Подробнее
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="categories__post__item">
                        <div
                          className="categories__post__item__pic small__item set-bg-10"
                          data-setbg="categories/categories-post/cp-2.jpg"
                        ></div>
                        <div className="categories__post__item__text">
                          <span className="post__label">Recipe</span>
                          <h3>
                            <a href="#">
                              Лучший запеченный картофель в будний день, 3 креативных способа                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                            </li>
                          </ul>
                          <p>
                            Завтрак должен быть достаточно обильным, чтобы зарядиться энергией на весь день. Ночью организм потребляет запасы углеводов, которые накопились в печени, и утром их следует восстановить.
                          </p>
                        </div>
                      </div>
                      <div className="categories__post__item">
                        <div
                          className="categories__post__item__pic set-bg-11"
                          data-setbg="categories/categories-post/cp-4.jpg"
                        ></div>
                        <div className="categories__post__item__text">
                          <ul className="post__label--large">
                            <li>Вегитарианские</li>
                            <li>Дисерты</li>
                          </ul>
                          <h3>
                            <a href="#">
                              Вода необходима для транспортировки питательных веществ и их остатков
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                            </li>
                          </ul>
                          <p>
                            Завтрак должен быть достаточно обильным, чтобы зарядиться энергией на весь день. Ночью организм потребляет запасы углеводов, которые накопились в печени, и утром их следует восстановить.
                          </p>
                        </div>
                      </div>
                      <div
                        className="categories__post__item__plain set-bg-12"
                        data-setbg="categories/categories-post/cp-6.jpg"
                      >
                        <div className="categories__post__item__text">
                          <ul className="post__label--large">
                            <li>Вегитарианские</li>
                            <li>Дисерты</li>
                          </ul>
                          <h3>
                            <a href="#">
                              Летний пирог для перекуса
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="categories__post__item">
                        <div
                          className="categories__post__item__pic smaller__large set-bg-13"
                          data-setbg="categories/categories-post/cp-8.jpg"
                        ></div>
                        <div className="categories__post__item__text">
                          <span className="post__label">Smoothie</span>
                          <h3>
                            <a href="#">
                              Делаем крутой сэндвич
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                            </li>
                          </ul>
                          <p>
                            Завтрак должен быть достаточно обильным, чтобы зарядиться энергией на весь день. Ночью организм потребляет запасы углеводов, которые накопились в печени, и утром их следует восстановить.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="categories__post__item">
                        <div
                          className="categories__post__item__pic smaller__large set-bg-14"
                          data-setbg="categories/categories-post/cp-3.jpg"
                        ></div>
                        <div className="categories__post__item__text">
                          <span className="post__label">Dinner</span>
                          <h3>
                            <a href="#">
                              Чтобы в вашем меню было достаточно клетчатки, необходимой для нормального пищеварения, нужно есть как зерновые продукты, так и фрукты, овощи и ягоды.
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                            </li>
                          </ul>
                          <p>
                            Завтрак должен быть достаточно обильным, чтобы зарядиться энергией на весь день. Ночью организм потребляет запасы углеводов, которые накопились в печени, и утром их следует восстановить.
                          </p>
                        </div>
                      </div>
                      <div className="categories__post__item__small">
                        <img src="categories/categories-post/quote.png" alt="" />
                        <p>
                          Война войной, а обед — по расписанию.
                        </p>
                        <div className="posted__by">Очень известный человек</div>
                      </div>
                      <div className="categories__post__item">
                        <div
                          className="categories__post__item__pic smaller__large set-bg-15"
                          data-setbg="categories/categories-post/cp-5.jpg"
                        ></div>
                        <div className="categories__post__item__text">
                          <span className="post__label">Коктели</span>
                          <h3>
                            <a href="#">
                              Обмен веществ в человеческом организме не нуждается в алкоголе
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                            </li>
                          </ul>
                          <p>
                            Завтрак должен быть достаточно обильным, чтобы зарядиться энергией на весь день. Ночью организм потребляет запасы углеводов, которые накопились в печени, и утром их следует восстановить.
                          </p>
                        </div>
                      </div>
                      <div className="categories__post__item">
                        <div
                          className="categories__post__item__pic set-bg-16"
                          data-setbg="categories/categories-post/cp-7.jpg"
                        ></div>
                        <div className="categories__post__item__text">
                          <ul className="post__label--large">
                            <li>Вегитарианские</li>
                            <li>Дисерты</li>
                          </ul>
                          <h3>
                            <a href="#">
                              Полента из свежих трав с чипсами из пастернака и кленовым маслом
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                            </li>
                          </ul>
                          <p>
                            Завтрак должен быть достаточно обильным, чтобы зарядиться энергией на весь день. Ночью организм потребляет запасы углеводов, которые накопились в печени, и утром их следует восстановить.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="sidebar__item">
                    <div className="sidebar__about__item">
                      <div className="sidebar__item__title">
                        <h6> Обо мне</h6>
                      </div>
                      <img src="sidebar/sidebar-about.jpg" alt="" />
                      <h6>
                        Всем привет!!! <span>Меня зовут Аружан</span>
                      </h6>
                      <p>
                        Это моя веб проргамма сделанная на React. Я рада сделать этот проект
                      </p>
                      <a href="About" className="primary-btn">
                        Смотреть больше
                      </a>
                    </div>
                    <div className="sidebar__feature__item">
                      <div className="sidebar__item__title">
                        <h6>Рецепты</h6>
                      </div>
                      <div
                        className="sidebar__feature__item__large set-bg-17"
                        data-setbg="sidebar/feature-post.jpg"
                      >
                        <div className="sidebar__feature__item__large--text">
                          <span>Завтрак</span>
                          <h5>
                            <a href="#">
                              Этот японский способ приготовления кофе со льдом
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__item__categories">
                      <div className="sidebar__item__title">
                        <h6>Категорий</h6>
                      </div>
                      <ul>
                        <li>
                          <a href="#">
                            Рецепты <span>128</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Завтраки <span>32</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Десерты <span>86</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Смузи <span>25</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Напитки <span>36</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Кофе <span>15</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Вегетариански <span>63</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar__about__item">
                      <img src="sidebar/sidebar-about.jpg" alt="" />
                      <h6>
                        Готовим вкусно
                      </h6>
                      <p>
                        Распланируйте свой день таким образом, чтобы было время для приема пищи как минимум три раза в день, по возможности регулярно, чтобы избежать переедания, вызванного длительным перерывом между приемами пищи
                      </p>
                      <a href="#" className="primary-btn">
                        Подробнее
                      </a>
                    </div>
                    <div className="categories__post__item">
                      <div className="categories__post__item__text">
                        <h3>
                          <a href="#">
                            Делаем крутой сэндвич
                          </a>
                        </h3>
                        <ul className="post__widget">
                          <li>
                          </li>
                        </ul>
                        <p>
                          Учитесь сами готовить пищу и делайте это медленно и с удовольствием, а еще лучше – в компании. Как правило, люди, которые готовят сами, едят более здоровую пищу.
                        </p>
                      </div>
                      <div
                        className="categories__post__item__pic smaller__large set-bg-18"
                        data-setbg="categories/categories-post/cp-8.jpg"
                      ></div>
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
                    Наш организм обязательно нуждается в жирах, но в незначительных количествах.
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

export default Home
