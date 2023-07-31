const React = require("react");
const connect = require("react-redux").connect;
const { push } = require("connected-react-router");


const Footer = (props) => {

    return <>
        <footer>
            <div className="container">
                <div className="row-footer">
                    <div className="footer-logo">
                        <img src="/public/assets/img/logo.png" alt="logo"/>
                            <h3> Адукар</h3>
                    </div>
                    <div className="project">
                        <div className="row-project">
                            <div className="project-list">
                                <ul>
                                    <li onClick={() => { props.push("/project") }}><a href="#">О проекте</a></li>
                                    <li onClick={() => { props.push("/universitety/") }}><a href="#">ВУЗы Беларуси</a></li>
                                    <li onClick={() => { props.push("/specialties/") }}><a href="#">Специальности</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="contact-footer">
                        <div className="row-contact-logo">
                            <div className="contact-logo">
                                <ul>
                                    <li><a href="https://vk.com/adukar" className="vk"><img src="/public/assets/img/vk.png"
                                        alt="vk"/></a></li>
                                    <li><a href="https://www.facebook.com/adukarofficial/" className="fb"><img
                                        src="/public/assets/img/facebook.png" alt="facebook" className="facebook"/></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCQHBkteJfKQmcVqUacaf9-w" className="yt"><img
                                        src="/public/assets/img/youtube.png" alt="youtube"/></a></li>
                                    <li><a href="https://t.me/adukarby" className="tg"><img src="/public/assets/img/telegram.png"
                                        alt="telegram"/></a></li>
                                    <li><a href="https://www.instagram.com/adukarby/" className="ig"><img
                                        src="/public/assets/img/instagram1.png" alt="instagram" className="instagram"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-copyrigt">
                    <div className="copyrigt">
                        <p>© Адукар 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}

module.exports = connect(null, { push })(Footer);