const React = require("react");
const connect = require("react-redux").connect;


const Specialties = (props) => { //props.user
   
   /* const routeParams = props.match.params;*/
    /*const specialties = props.specialties.find((speciality) => speciality.id == props.universities.id);*/
    /*const specialties = props.specialties.find((speciality) => speciality.universityId == props.universities.id);*/
    /*const specialties = props.specialties.filter((speciality) => speciality.universityId == routeParams.id);*/

    /*const specialties = props.specialties.filter((speciality) => speciality.universityId == props.universities.id);*/
    /*const specialties = props.specialties.filter((speciality) => speciality.id == props.universities.id);
    
*/
    /*const specialties = props.specialties.filter((speciality) => speciality.universityId == this.university.id);*/


    return <>
        <section className="listSpecialties">
            <div className="container">
                <div className="row-listSpecialties-text">
                    <div className="listSpecialties-text">
                        <h2>Высшие учебные заведения/Специальности</h2>
                    </div>
                </div>
                <div className="row-listSpecialties-university">
                    {props.specialties.map((speciality, index) => {
                        return <div className="university-speciality" key={speciality.id} >
                            <div className="row-university-speciality-title" >
                                <div className="university-speciality-title" onClick={() => { props.history.push(`/detailUniversity/${speciality.id}`) }}>
                                    <h3>{speciality.id}</h3>
                                </div>
                                <div className="university-speciality-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="col1table">Специальность (Специализация)</th>
                                                <th scope="col">Квалификация</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/*specialties.map((speciality, index) => {
                                                return <> <tr  key={speciality.id} onClick={() => { props.history.push(`/detailSpecialty/${speciality.id}`) }}>
                                                    <td>{speciality.speciality}</td>
                                                    <td> {speciality.qualification}</td>
                                                </tr></>
                                            })*/}
                                            <td className="col1table1">{speciality.speciality}</td>
                                            <td> {speciality.qualification}</td>
                                            

                                        </tbody>
                                    </table>

                                    
                                </div>
                            </div>
                        </div>
                    })
                    }

                </div>
            </div>
        </section>


    </>
}

const mapStateToProps = state => {
    return {
        universities: state.university.universities, //university -  название reducer, описанного в /reducer/index.jsx,  universities - массив продуктов
        specialties: state.university.specialties,//university -  название reducer, описанного в /reducer/index.jsx,  specialties - массив специальностей
       
    }
};

const mapDispatchToProps = dispatch => ({});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Specialties);