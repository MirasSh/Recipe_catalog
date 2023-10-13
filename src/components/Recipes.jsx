import '../App.css'
import { useState, useEffect } from "react";


const About = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    }); 
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    } 

    function handleAddTodo() {
        if (inputValue) {
            setTodos([
                ...todos,
                {
                    text: inputValue,
                    id: Math.random().toString(36).substring(7),
                    checked: false 
                },
            ]);
            setInputValue("");
        }
    }

    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    } 
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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
                                            <li className="active"><a href="Recipes">Рецепты</a></li>
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
                                <div className='flex'>
                                <input
                                    className="input_style"
                                    type="text"
                                    placeholder="Введите рецепт"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />{" "}
                                <button className="kettik" onClick={handleAddTodo}>
                                    Добавить
                                </button>
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
                                        <h2>Рецепты</h2>
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about__pic__item__large">
                                        <img src="about/about-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about__right__text">
                                        <h2>Пхали из моркови и тыквы</h2>
                                        <p>
                                            Продукты <br />
                                            Морковь — 150 г в очищенном виде<br />
                                            Тыква — 300 г в очищенном виде<br />
                                            Орехи грецкие (ядра) — 90 г<br />
                                            Лук репчатый — 50 г<br />
                                            Масло растительное — 50 мл<br />
                                            Кинза свежая — 15 г<br />
                                            Чеснок — 15 г<br />
                                            Розмарин сушёный — 1 ч. ложка<br />
                                            Перец чёрный молотый — по вкусу<br />
                                            Клюква свежая или вяленая (для украшения) — 9 шт.<br />
                                            Соль — по вкусу<br />
                                            Хмели-сунели — 2 щепотки<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            {todos.map((todo, index) => (
                                <div key={todo.id} className="row">
                                    <div className="col-lg-6">
                                        <div className="about__pic__item__large">
                                            <img src="about/about-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="about__right__text">
                                            <h2>{todo.text}</h2>
                                            <button onClick={() => handleDelete(index)}>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
        </body >
        </>

    );
};
export default About;



