const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");

const Header = (props) => {


    return <>
        <header>
            <div className="container">
                <div className="header-main-menu">
                    <div className="logo">
                        <img src="/public/assets/img/logo.png" />
                        <h1> Адукар</h1>
                    </div>
                    
                    <div className="choose-university " onClick={() => { props.push("/universitety/") }}>
                        <p> Выбрать ВУЗ </p>
                    </div>
                    <div className="choose-city" onClick={() => { props.push("/signup") }}>
                        <p> Регистрация</p>
                    </div>
                    <div className="entrance" onClick={() => { props.push("/signin") }}>
                        {/*(props.login == "") && <>
                            <a href=" " className="registration ">Регистрация</a>
                            <a href=" " className="signin ">Вход</a>
                        </>
*/}
                        {/*(props.login != "") && <>
                            <div>{props.login}</div>
                        </>
*/}
                        <p > Вход</p>
                    </div>
                </div>

                <div className="header-secondary-menu">
                    <div className="main-menu">
                        <ul>
                            <li onClick={() => { props.push("/") }}><a href="#secondary-menu-main">Главная</a></li>
                            <li onClick={() => { props.push("/universitety/") }}><a href="#university-belarus">ВУЗы Беларуси</a></li>
                            <li onClick={() => { props.push("/specialties/") }}><a href="#speciality">Специальности</a></li>
                            {/*<li onClick={() => { props.push("/choiceSpecialties/") }}><a href="#selection">Подобрать по ЦЭ (ЦТ)</a></li>*/}
                            <li onClick={() => { props.push("/applicationForm/") }}><a href="#application">Оставить заявку</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>;
}

module.exports = connect(null, { push })(Header);