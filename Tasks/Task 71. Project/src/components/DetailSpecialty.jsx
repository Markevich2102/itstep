const React = require("react");
const connect = require("react-redux").connect;



const DetailSpecialty = (props) => {
    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе

    /*const university = props.universities.find((university) => university.id == routeParams.id);*/
    /*const university = props.universities.filter((university) => university.universityId == routeParams.id)*/
    const speciality1 = props.specialties1.find((speciality) => speciality.id == routeParams.id);
    /*const specialties = props.specialties.filter((speciality) => speciality.universityId == routeParams.id);*/
    /*const speciality = props.specialties.filter((speciality) => speciality.universityId == routeParams.id);*/

    return <>
        <section className="chosenSpecialty">
            <div className="container">
                <div className="row-chosenSpecialty-text">
                    <div className="chosenSpecialty-text1">
                        
                    </div>
                    <div className="chosenSpecialty-text2">
                        <h2>{speciality1.speciality}</h2>
                    </div>
                </div>
            </div>
        </section>



        <section className="chosenSpecialty-text">
            <div className="container ">
                <h3>{speciality1.qualification}</h3>
                <p>{speciality1.text1}</p>
                <h3>Где сможешь работать?</h3>
                <p>{speciality1.text2}</p>
                <h3>{speciality1.qualification}— какой он?</h3>
                <p>{speciality1.text3}</p>
            </div>
        </section>







    </>

}

const mapStateToProps = state => {
    return {
        universities: state.university.universities, //university -  название reducer, описанного в /reducer/index.jsx, universities - массив университетов
        specialties: state.university.specialties,//university -  название reducer, описанного в /reducer/index.jsx,  specialties - массив специальностей
        specialties1: state.university.specialties1,//university -  название reducer, описанного в /reducer/index.jsx,  specialties - массив специальностей

    }
};

const mapDispatchToProps = dispatch => ({
    /* onDeleteUniversity: (universityId) => {
         dispatch({
             type: DELETE_UNIVERSITY, universityId
         })
     }*/
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);