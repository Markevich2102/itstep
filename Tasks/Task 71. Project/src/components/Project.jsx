const React = require("react");


const connect = require("react-redux").connect;


const Project = (props) => { //props.user

    return <>
        <section className="project2">
            <div className="container">
                <div className="row-project-text">
                    <div className="project-text1">
                        <h2>О проекте</h2>
                    </div>
                    <div className="project-text2">
                        Команда проекта Адукар, используя современные технологии, заполняет информационные пробелы, помогает людям разных возрастов определиться с профессией и получить новые знания. Мы верим, что этот путь можно сделать проще, а выбор — осознаннее.
                    </div>
                    <div className="project-text3">
                        <h4>Адукар сегодня</h4>
                    </div>
                    <div className="project-text4">
                        За семь лет мы запустили и активно развиваем семь направлений в онлайн- и офлайн-формате. Каждый год сайт посещают 4 000 000 уникальных пользователей. А в нашем учебном центре ежедневно обучаются около 400 человек.
                    </div>
                </div>
            </div>
        </section>


        <section className="project-image">
            <div className="container project-image1 ">
                <img src={`/public/assets/img/onas-22-6.jpg`} alt="" />
                <img src={`/public/assets/img/onas-22-7.jpg`}
                    alt="" />
                <img src={`/public/assets/img/onas-22-8.jpg`}
                    alt="" />
                <img src={`/public/assets/img/onas-22-9.jpg`}
                    alt="" />
            </div>
        </section>

    </>
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => ({});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Project);