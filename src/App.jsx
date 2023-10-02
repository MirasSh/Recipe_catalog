import './App.css'
function App() {

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
                      <li className="active"><a href="./index.html">Home</a></li>
                      <li><a href="#">Recipes</a></li>
                      <li><a href="#">Dinner</a></li>
                      <li><a href="#">Desserts</a></li>
                      <li className="dropdown"><a href="#">Pages</a>
                        <ul className="dropdown__menu">
                          <li><a href="./categories-grid.html">Categories Grid</a></li>
                          <li><a href="./categories-list.html">Categories List</a></li>
                          <li><a href="./single-post.html">Single Post</a></li>
                          <li><a href="./signin.html">Sign In</a></li>
                          <li><a href="./404.html">404</a></li>
                          <li><a href="./typography.html">Typography</a></li>
                        </ul>
                      </li>
                      <li><a href="./about.html">About</a></li>
                      <li><a href="./contact.html">Contact</a></li>
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
                  <a href="./index.html"><img src="logo.png" alt="" /></a>
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

                    {/* сука */}
                    <div className="hero__inside__item hero__inside__item--wide set-bg-1" data-setbg="hero/hero-1.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Vegan</li>
                            <li>Desserts</li>
                          </ul>
                          <h4>Vegan White Peach Mug Cobbler With CardamomVegan<br /> White Peach Mug Cobbler With Cardamom</h4>
                          <ul className="widget">
                            <li>by <span>Admin</span></li>
                            <li>3 min read</li>
                            <li>20 Comment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* сука конец */}
                  </div>
                  <div className="col-lg-3 col-md-6 p-0">
                    <div className="hero__inside__item hero__inside__item--small set-bg-2" data-setbg="hero/hero-3.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Vegan</li>
                            <li>Desserts</li>
                          </ul>
                          <h5>How to Make a Milkshake With Any <br />Ice Cream, Any Toppings...</h5>
                        </div>
                      </div>
                    </div>
                    <div className="hero__inside__item hero__inside__item--small set-bg-3" data-setbg="hero/hero-2.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Vegan</li>
                            <li>Desserts</li>
                          </ul>
                          <h5>Vintage Copper Preserve Pan with <br />Brass Handles, Mid 19th Century</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 p-0">
                    <div className="hero__inside__item set-bg-4" data-setbg="hero/hero-4.jpg">
                      <div className="hero__inside__item__text">
                        <div className="hero__inside__item--text">
                          <ul className="label">
                            <li>Vegan</li>
                            <li>Desserts</li>
                          </ul>
                          <h5>Marinated Lentil Salad with Zucchini and Tomatoes</h5>
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
                        <li>Vegan</li>
                        <li>Desserts</li>
                      </ul>
                      <h3>
                        <a href="#">
                          The Absolute Best Way to Cook Steak Perfectly, According to
                          Wayyy Too Many Tests
                        </a>
                      </h3>
                      <ul className="post__widget">
                        <li>
                          by <span>Admin</span>
                        </li>
                        <li>3 min read</li>
                        <li>20 Comment</li>
                      </ul>
                      <p>
                        Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur excepteur sint ...
                      </p>
                      <a href="#" className="primary-btn">
                        Read more
                      </a>
                      <div className="post__social">
                        <span>Share</span>
                        <a href="#">
                          <i className="fa fa-facebook"></i> <span>82</span>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i> <span>24</span>
                        </a>
                        <a href="#">
                          <i className="fa fa-envelope-o"></i> <span>08</span>
                        </a>
                      </div>
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
                              The Best Weeknight Baked Potatoes, 3 Creative Ways
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                              by <span>Admin</span>
                            </li>
                            <li>3 min read</li>
                            <li>20 Comment</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida...
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
                            <li>Vegan</li>
                            <li>Desserts</li>
                          </ul>
                          <h3>
                            <a href="#">
                              The Best Grass Stain Remover Is Already In Your Pantry
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                              by <span>Admin</span>
                            </li>
                            <li>3 min read</li>
                            <li>20 Comment</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida...
                          </p>
                        </div>
                      </div>
                      <div
                        className="categories__post__item__plain set-bg-12"
                        data-setbg="categories/categories-post/cp-6.jpg"
                      >
                        <div className="categories__post__item__text">
                          <ul className="post__label--large">
                            <li>Vegan</li>
                            <li>Desserts</li>
                          </ul>
                          <h3>
                            <a href="#">
                              This Summer Snacking Cake Is theSweetest Excuse to...
                            </a>
                          </h3>
                          <div className="post__social">
                            <span>Share</span>
                            <a href="#">
                              <i className="fa fa-facebook"></i> <span>82</span>
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter"></i> <span>24</span>
                            </a>
                            <a href="#">
                              <i className="fa fa-envelope-o"></i> <span>08</span>
                            </a>
                          </div>
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
                              This 2-Ingredient Spread Makes Any Egg Sandwich So Much
                              Better
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                              by <span>Admin</span>
                            </li>
                            <li>3 min read</li>
                            <li>20 Comment</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida...
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
                              17 Perfect Gifts for Your Vegan Friend Because Sometimes...
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                              by <span>Admin</span>
                            </li>
                            <li>3 min read</li>
                            <li>20 Comment</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida...
                          </p>
                        </div>
                      </div>
                      <div className="categories__post__item__small">
                        <img src="categories/categories-post/quote.png" alt="" />
                        <p>
                          Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt labore et dolore magna aliqua
                          gravida.
                        </p>
                        <div className="posted__by">Elena T.Jaivy</div>
                      </div>
                      <div className="categories__post__item">
                        <div
                          className="categories__post__item__pic smaller__large set-bg-15"
                          data-setbg="categories/categories-post/cp-5.jpg"
                        ></div>
                        <div className="categories__post__item__text">
                          <span className="post__label">Drinks</span>
                          <h3>
                            <a href="#">
                              A 5-Minute Peach Mug Cobbler That Just So Happens to...
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                              by <span>Admin</span>
                            </li>
                            <li>3 min read</li>
                            <li>20 Comment</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida...
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
                            <li>Vegan</li>
                            <li>Desserts</li>
                          </ul>
                          <h3>
                            <a href="#">
                              Fresh Herb Polenta with Parsnip Chips and Maple Butter
                            </a>
                          </h3>
                          <ul className="post__widget">
                            <li>
                              by <span>Admin</span>
                            </li>
                            <li>3 min read</li>
                            <li>20 Comment</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                            suspendisse ultrices gravida...
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
                        <h6>About me</h6>
                      </div>
                      <img src="sidebar/sidebar-about.jpg" alt="" />
                      <h6>
                        Hi every one! I,m <span>Lena Mollein.</span>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <a href="#" className="primary-btn">
                        Read more
                      </a>
                    </div>
                    <div className="sidebar__feature__item">
                      <div className="sidebar__item__title">
                        <h6>Feature Posts</h6>
                      </div>
                      <div
                        className="sidebar__feature__item__large set-bg-17"
                        data-setbg="sidebar/feature-post.jpg"
                      >
                        <div className="sidebar__feature__item__large--text">
                          <span>Dinner</span>
                          <h5>
                            <a href="#">
                              This Japanese Way of Making Iced Coffee Is a Game...
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div className="sidebar__feature__item__list">
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__text">
                            <span>Dinner</span>
                            <h5>
                              <a href="#">Grilled Potato and Green Bean Salad</a>
                            </h5>
                          </div>
                        </div>
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__meta">
                            <h4>05</h4>
                            <span>Aug</span>
                          </div>
                          <div className="post__text">
                            <span>Smoothie</span>
                            <h5>
                              <a href="#">
                                The $8 French Rosé I Buy in Bulk Every Summer
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__meta">
                            <h4>26</h4>
                            <span>jul</span>
                          </div>
                          <div className="post__text">
                            <span>Desert</span>
                            <h5>
                              <a href="#">
                                Ina Garten s Skillet-Roasted Lemon Chicken
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="sidebar__feature__item__list__single">
                          <div className="post__meta">
                            <h4>16</h4>
                            <span>jul</span>
                          </div>
                          <div className="post__text">
                            <span>Vegan</span>
                            <h5>
                              <a href="#">
                                The Best Weeknight Baked Potatoes, 3 Creative Ways
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar__item__banner">
                      <img src="sidebar/banner.jpg" alt="" />
                    </div>
                    <div className="sidebar__item__categories">
                      <div className="sidebar__item__title">
                        <h6>Categories</h6>
                      </div>
                      <ul>
                        <li>
                          <a href="#">
                            Recipes <span>128</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Dinner <span>32</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Dessert <span>86</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Smothie <span>25</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Drinks <span>36</span>
                          </a>
                        </li>
                        <li className="p-left">
                          <a href="#">
                            Cakes <span>15</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Vegan <span>63</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Weightloss <span>27</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar__about__item">
                      <img src="sidebar/sidebar-about.jpg" alt="" />
                      <h6>
                        Hi every one! I,m <span>Lena Mollein.</span>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <a href="#" className="primary-btn">
                        Read more
                      </a>
                    </div>
                    <div className="categories__post__item">
                      <div className="categories__post__item__text">
                        <h3>
                          <a href="#">
                            This 2-Ingredient Spread Makes Any Egg Sandwich So Much
                            Better
                          </a>
                        </h3>
                        <ul className="post__widget">
                          <li>
                            by <span>Admin</span>
                          </li>
                          <li>3 min read</li>
                          <li>20 Comment</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
                          suspendisse ultrices gravida...
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

export default App
