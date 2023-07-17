const React = require("react");
const connect = require("react-redux").connect;
const Universitety = require("./Universitety.jsx");


const ChoiceSpecialties = (props) => { //props.user

    return <>
        <section className="choiceSpecialties">
            <div className="container">
                <div className="row-choiceSpecialties-text">
                    <div className="choiceSpecialties-text">
                        <h2>Подбор специальностей по ЦЭ и ЦТ</h2>
                        <p className="bg">С 2023 года все выпускники школ сдают два ЦЭ: по русскому или белорусскому языку
                            и профильному предмету будущей специальности. А те, кто планирует поступать в вуз, сдают ещё
                            одно ЦТ.</p>
                    </div>
                </div>
                <div className="row-choiceSpecialties-items">
                    <div className="choiceSpecialties-items">
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">Математика
                                </span>
                        </label>
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">Рус.яз./Бел.яз.
                                </span>
                        </label>
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">Обществоведение
                                </span>
                        </label>
                    </div>
                    <div className="choiceSpecialties-items"><label className="filter-items-button">
                        <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                            <span className="filter-items-button__button">Физика
                            </span>
                    </label>
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">Информатика
                                </span>
                        </label>
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">Химия
                                </span>
                        </label>

                    </div>
                    <div className="choiceSpecialties-items">
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">Иностранный язык
                                </span>
                        </label>
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">История Беларуси
                                </span>
                        </label>
                        <label className="filter-items-button">
                            <input type="checkbox" name="item" value="107" className="filter-items-button__input"/>
                                <span className="filter-items-button__button">Биология
                                </span>
                        </label>

                    </div>
                </div>
                <div className="row-choiceSpecialties-button">
                    <div className="choiceSpecialties-button">
                        <button type="button" className="shine-button">Показать специальности</button>
                    </div>
                </div>
            </div>
        </section>
        <Universitety/>
        
        
    </>
}

const mapStateToProps = state => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => ({});

module.exports = connect(mapStateToProps, mapDispatchToProps)(ChoiceSpecialties);