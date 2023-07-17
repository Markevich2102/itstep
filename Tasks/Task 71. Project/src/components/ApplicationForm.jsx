const React = require("react");
const connect = require("react-redux").connect;
const { ADD_APPLICATION } = require("../actions/actions.jsx");

const ApplicationForm = (props) => {

    let [data, setData] = React.useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        item1: "",
        item2: "",
        item3: ""
    });

    const [formError, setFormError] = React.useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        item1: "",
        item2: "",
        item3: ""
    }); 

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!validate()) {
            return false;
        } else {
            props.onApplicationAdd(data);
            setData({
                name: "",
                email: "",
                phone: "",
                city: "",
                item1: "",
                item2: "",
                item3: ""
            });
        }

       
        /*props.history.push("/")*/
    }

    function handleNameChange(event) {
        setData({ ...data, name: event.target.value });
    }

    function handleEmailChange(event) {
        setData({ ...data, email: event.target.value });
    }

    function handlePhoneChange(event) {
        setData({ ...data, phone: event.target.value });
    }
    function handleCityChange(event) {
        setData({ ...data, city: event.target.value });
    }
    function handleItem1Change(event) {
        setData({ ...data, item1: event.target.value });
    }
    function handleItem2Change(event) {
        setData({ ...data, item2: event.target.value });
    }
    function handleItem3Change(event) {
        setData({ ...data, item3: event.target.value });
    }
    /*function handleCitiesChange(event) {
        setData({ ...data, cities: event.target.checked });
    }
    function handleItemsChange(event) {
        setData({ ...data, items: event.target.checked });
    }
*/

    function validate() {
        let isValid = true;
        if (data.name == "") {
            formError.name = "Поле не заполнено";
            isValid = false;
        } else {
            formError.name = "";
        }

        if (data.email == "") {
            formError.email = "Поле не заполнено";
            isValid = false;
        } else {
            formError.email = "";
        }

        if (data.phone == "") {
            formError.phone = "Поле не заполнено";
            isValid = false;
        } else {
            formError.phone = "";
        }

        if (data.city == "") {
            formError.city = "Поле не заполнено";
            isValid = false;
        } else {
            formError.city = "";
        }

        if (data.item1 == "") {
            formError.item1 = "Поле не заполнено";
            isValid = false;
        } else {
            formError.item1 = "";
        }
        if (data.item2 == "") {
            formError.item2 = "Поле не заполнено";
            isValid = false;
        } else {
            formError.item2 = "";
        }
        if (data.item3 == "") {
            formError.item3 = "Поле не заполнено";
            isValid = false;
        } else {
            formError.item3 = "";
        }
        setFormError({ ...formError });
        return isValid;
    }

    return (<>
        <section className="application">
            <div className="container">
                <div className="row-application-text">
                    <div className="application-text">
                        <h3>Оставь заявку и мы поможем тебе подобрать ВУЗы и специальности.</h3>
                    </div>
                </div>
                <div className="row-application-form">
                    <div className="application-form">
                        <form action="" method="post" name="reg_form" className="reg-form" onSubmit={handleFormSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-label">
                                        <label htmlFor="FIO">ФИО:</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <input type="text" name="FIO" id="FIO" onChange={handleNameChange} value={data.name} placeholder="Введите ФИО" />{formError.name != "" && <div className="redcolor">{formError.name}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-label">
                                        <label htmlFor="email">Email:</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <input type="text" name="email" id="email" onChange={handleEmailChange} value={data.email} placeholder="Введите Email" />{formError.email != "" && <div className="redcolor">{formError.email}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-label">
                                        <label htmlFor="phone">Телефон:</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <input type="text" name="phone" id="phone" onChange={handlePhoneChange} value={data.phone} placeholder="Введите телефон" />{formError.phone != "" && <div className="redcolor">{formError.phone}</div>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-label">
                                        <label >Город поступления:</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <input type="text" name="city" id="city" onChange={handleCityChange} value={data.city} placeholder="Введите город для поступления в ВУЗ" />{formError.city != "" && <div className="redcolor">{formError.city}</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-label">
                                        <label >Вступительные испытания:</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <input type="text" name="item1" id="item1" onChange={handleItem1Change} value={data.item1} placeholder="Введите первый предмет" />{formError.item1 != "" && <div className="redcolor">{formError.item1}</div>}
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="item2" id="item2" onChange={handleItem2Change} value={data.item2} placeholder="Введите второй предмет" />{formError.item2 != "" && <div className="redcolor">{formError.item2}</div>}
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="item3" id="item3" onChange={handleItem3Change} value={data.item3} placeholder="Введите третий предмет" />{formError.item3 != "" && <div className="redcolor">{formError.item3}</div>}
                                    </div>
                                    
                                </div>
                            </div>
                            {/*<div className="row">
                                <div className="col-lg-6">
                                    <div className="form-label">
                                        <label>Город в котором хотели бы учиться:</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <div className="form-control-check">
                                            <input type="checkbox" name="city[]" id="city-1" onChange={handleCitiesChange} checked={data.cities} /><label
                                                htmlFor="city-1">Минск</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="city[]" id="city-2" onChange={handleCitiesChange} checked={data.cities} /><label
                                                htmlFor="city-2">Гомель</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="city[]" id="city-3" onChange={handleCitiesChange} checked={data.cities} /><label
                                                htmlFor="city-3">Гродно</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="city[]" id="city-4" onChange={handleCitiesChange} checked={data.cities} /><label
                                                htmlFor="city-4">Брест</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="city[]" id="city-5" onChange={handleCitiesChange} checked={data.cities} /><label
                                                htmlFor="city-5">Витебск</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="city[]" id="city-6" onChange={handleCitiesChange} checked={data.cities} /><label
                                                htmlFor="city-6">Могилёв</label>
                                        </div>
                                    </div>
                                </div>
    </div>*/}

                            {/*<div className="row">
                                <div className="col-lg-6">
                                    <div className="form-label">
                                        <label>Вступительные испытания:</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-1" onChange={handleItemsChange} checked={data.items} /><label htmlFor="entranceTests-1">Математика</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-2" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-2">Русский язык/Белорусский язык</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-3" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-3">Обществоведение</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-4" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-4">Физика</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-5" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-5">Информатика</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-6" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-6">Химия</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-7" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-7">Иностранный язык</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-8" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-8">История Беларуси</label>
                                        </div>
                                        <div className="form-control-check">
                                            <input type="checkbox" name="entranceTests[]" id="entranceTests-9" onChange={handleItemsChange} checked={data.items} /><label
                                                htmlFor="entranceTests-9">Биология</label>
                                        </div>
                                    </div>
                                </div>
</div>*/}


                            <div className="row">
                                <div className="col-lg-6">
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-control">
                                        <button>Отправить</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    </>)

};

const mapStateToProps = (state) => {

    return {
        universities: state.university.universities, //post -  название reducer, описанного в /reducer/index.jsx, posts - массив продуктов
        comments: state.university.comments,
        contacts: state.university.contacts,
        applications: state.university.applications,

    }

}


const mapDispatchToProps = dispatch => ({
    onApplicationAdd: (application) => {
        dispatch({
            type: ADD_APPLICATION, application
        })
    }
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);