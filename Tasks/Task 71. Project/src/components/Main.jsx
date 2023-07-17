const React = require("react");
const connect = require("react-redux").connect;


const Main = (props) => { //props.user

    return <>
        <section className="mainPage">
            <div className="container">
                <div className="row-mainPage-text">
                    <div className="mainPage-text">
                        <h2>ПОСТУПИ В ВУЗ МЕЧТЫ</h2>
                        <h4>Адукар — это крупнейший каталог вузов, специальностей, профессий, материалов на тему высшего
                            образования.</h4>
                    </div>
                </div>
                <div className="row-mainSearch">
                    <div className="mainSearch">
                        {/*<input type="text" className="form-control" id="qwe" name="vuz" data-toggle="tooltip"
                            data-placement="bottom" placeholder="Начните вводить название вуза"
title="Начните вводить название вуза" />*/}
                        <button type="submit" className="floating-button" onClick={() => { props.history.push(`/project`) }}>Узнать подробнее</button>
                            {/*<button type="submit" value="Подобрать" className="form-control-submit">Подобрать</button>*/}
                    </div>
                </div>
            </div>
        </section>
        <section className="info">
            <div className="container">
                <div className="row-info-text">
                    <div className="info-text">
                        <h2>Высшие учебные заведения</h2>
                    </div>
                </div>
                <div className="row-info-university">{
                    props.universities.map((university, index) => {
                        return <div className="university" key={university.id}  onClick={() => { props.history.push(`/detailUniversity/${university.id}`) }}>
                                <div className="row-university-image" >
                                    <div className="university-image">
                                        <img src={`/public/assets/img/imguniversities/${university.image}`}
                                            alt={university.title} />
                                    </div>
                                    <div className="university-image-text">
                                        <a href="#" className="myuniversity">
                                            <p>{university.title}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        
                    })
                }
                </div>
            </div>
        </section >
        
    </>
}

const mapStateToProps = state => {
   return {
       universities: state.university.universities, //post -  название reducer, описанного в /reducer/index.jsx, posts - массив продуктов
       comments: state.university.comments,
       contacts: state.university.contacts
    }
};

const mapDispatchToProps = dispatch => ({});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Main);