const React = require("react");
const connect = require("react-redux").connect;


const Specialties = (props) => {

    const specialties = props.specialties.filter((speciality) => speciality.universityId == props.universities.id);

    return <>
        <section className="listSpecialties">
            <div className="container">
                <div className="row-listSpecialties-text">
                    <div className="listSpecialties-text">
                        <h2>Высшие учебные заведения/Специальности</h2>
                    </div>
                </div>
                <div className="row-listSpecialties-university">

                    <div className="university-speciality"  >
                        <div className="row-university-speciality-title" >

                            <div className="university-speciality-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Специальность (Специализация)</th>
                                            <th scope="col">Квалификация</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.specialties1.map((speciality, index) => {
                                            return <tr className="hoverred" key={speciality.id} onClick={() => { props.history.push(`/detailSpecialty/${speciality.id}`) }}>
                                                <td>{speciality.speciality}</td>
                                                <td> {speciality.qualification}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
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
        universities: state.university.universities, //university -  название reducer, описанного в /reducer/index.jsx,  universities - массив продуктов
        specialties: state.university.specialties,//university -  название reducer, описанного в /reducer/index.jsx,  specialties - массив специальностей
        specialties1: state.university.specialties1,//university -  название reducer, описанного в /reducer/index.jsx,  specialties - массив специальностей

    }
};

const mapDispatchToProps = dispatch => ({});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Specialties);