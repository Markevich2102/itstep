const React = require("react");
const connect = require("react-redux").connect;


const Universitety = (props) => {

    return <>
        <section className="info">
            <div className="container">
                <div className="row-info-text">
                    <div className="info-text">
                        <h2>Высшие учебные заведения</h2>
                    </div>
                </div>
                <div className="row-info-university">

                    {props.universities.map((university, index) => {
                        return <div className="university" key={university.id} onClick={() => { props.history.push(`/detailUniversity/${university.id}`) }}>
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
        universities: state.university.universities, //university -  название reducer, описанного в /reducer/index.jsx,  universities - массив продуктов
        comments: state.university.comments,
        contacts: state.university.contacts
    }
};

const mapDispatchToProps = dispatch => ({});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Universitety);