const React = require("react");
const connect = require("react-redux").connect;
const FormComment = require("./FormComment.jsx");


const DetailUniversity = (props) => {
    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе

    const university = props.universities.find((university) => university.id == routeParams.id);
    const contact = props.contacts.find((contact) => contact.id == routeParams.id);
    const comments = props.comments.filter((comment) => comment.universityId == routeParams.id);
    const specialties = props.specialties.filter((speciality) => speciality.universityId == routeParams.id);

    let [comment, setComment] = React.useState();

    function addComment(event) {
        if (comment.event.target.tagName != "ADDCOMMENT") {
            return false;
        }
        comment.event.target.classList.add("addComment");
    }

    return <>
        <section className="chosenUniversity">
            <div className="container container-chosenUniversity">
                <div className="row-chosenUniversity-text">

                    <div className="chosenUniversity-text1">
                        <h2>{university.name}</h2>
                    </div>
                    <div className="chosenUniversity-text2">
                        <h3>{university.title}</h3>
                    </div>
                </div>
                <div className="row-chosenUniversity-image">
                    <div className="chosenUniversity-image">
                        <img src={`/public/assets/img/imguniversities/${university.image}`} alt={university.title} />
                    </div>
                </div>
            </div>
        </section>

        <section className="chosenUniversity-info">
            <div className="container ">
                <div className="row-chosenUniversity-info-title">
                    <div className="chosenUniversity-info-title">
                        <h3>О {university.name}</h3>
                    </div>
                </div>
                <div className="row-chosenUniversity-info-text">
                    <div className="chosenUniversity-info-text">
                        <p>{university.text}</p>
                    </div>
                    <div className="chosenUniversity-info-image">
                        <img src={`/public/assets/img/imgrectors/${university.rektorImage}`} alt={university.title} />
                        <p>{university.rektorName}</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="chosenUniversity-specialties">
            <div className="container ">
                <div className="row-chosenUniversity-specialties-info">
                    <div className="chosenUniversity-specialties-info">
                        <h3>Специальности</h3>
                    </div>
                </div>
                <div className="row-chosenUniversity-specialties-table">
                    <div className="chosenUniversity-specialties-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="col1table">Специальность (Специализация)</th>
                                    <th scope="col" className="col2table">Квалификация</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specialties.map((speciality, index) => {
                                    return <tr key={speciality.id}>
                                        <td className="col1table1">{speciality.speciality}</td>
                                        <td className="col1table2"> {speciality.qualification}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <section className="chosenUniversity-comments">
            <div className="container">
                <div className="row-chosenUniversity-comments-title">
                    <div className="chosenUniversity-comments-title">
                        <h3>Отзывы о {university.name}</h3>
                    </div>
                </div>
                {comments.map((comment, index) => {
                    return <div className="row-chosenUniversity-comments-text" key={comment.id}><div className="chosenUniversity-comments-image" >
                        <img src={`/public/assets/img/imgcomments/${comment.author}`} alt={university.title} />
                    </div>
                        <div className="chosenUniversity-comments-text">
                            <p>{comment.text}</p>
                        </div></div>
                })}

                <div className="row-chosenUniversity-comments-buttons">
                    <div className="chosenUniversity-comments-buttons"> <FormComment id={university.id} />

                    </div>
                </div>
            </div>
        </section>

        <section className="chosenUniversity-contacts">
            <div className="container">
                <div className="row-chosenUniversity-contacts-title">
                    <div className="chosenUniversity-contacts-title">
                        <h3>Контактная информация</h3>
                    </div>
                </div>
                <div className="row-chosenUniversity-contacts">
                    <div className="chosenUniversity-contacts-phone">
                        <img src="/public/assets/img/free-icon-phone-call-126509.png" alt="phone" />
                        <a href={`tel:${contact.phone}`} className="company-contacts__phone-number" itemProp="telephone">{contact.phone}</a>
                    </div>
                    <div className="chosenUniversity-contacts-info">
                        <div className="row-chosenUniversity-contacts-info">
                            <div className="chosenUniversity-contacts-phone1">
                                <span>{contact.address}</span>
                            </div>
                            <div className="chosenUniversity-contacts-email">
                                <a href={`http://${contact.email}`} target="_blank" className="company-contacts__link" rel="nofollow">
                                    <img src="/public/assets/img/free-icon-email-482138.png" />
                                    <span className="company-contacts__text">{contact.email} </span>
                                </a>
                            </div>
                            <div className="chosenUniversity-contacts-mail">
                                <a href={`mailto:${contact.mail}`} className="company-contacts__link">
                                    <img src="/public/assets/img/free-icon-mail-646094.png" />
                                    <span className="company-contacts__text" itemProp="email">{contact.mail} </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

const mapStateToProps = state => {
    return {
        universities: state.university.universities, //university -  название reducer, описанного в /reducer/index.jsx, universities - массив университетов
        specialties: state.university.specialties,//university -  название reducer, описанного в /reducer/index.jsx, universities - массив университетов
        comments: state.university.comments,
        contacts: state.university.contacts
    }
};

const mapDispatchToProps = dispatch => ({

});

module.exports = connect(mapStateToProps, mapDispatchToProps)(DetailUniversity);