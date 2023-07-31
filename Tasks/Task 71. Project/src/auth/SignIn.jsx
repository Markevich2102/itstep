const React = require("react");
const connect = require("react-redux").connect;
const { SIGNIN } = require("./../actions/actions.jsx")


const SignIn = (props) => {

    const [data, setData] = React.useState({
        login: "",
        password: ""
    });

    const [formError, setFormError] = React.useState({
        login: "",
        password: ""
    });

    function handleLoginChange(event) {
        setData({ ...data, login: event.target.value });

    }
    function handlePasswordChange(event) {
        setData({ ...data, password: event.target.value });
    }

    function signIn(event) {
        event.preventDefault();
        let user = props.users.find((user) => user.login == data.login && user.password == data.password);

        if (!validate()) {
            return false;
        } else {
            if (user !== undefined) {
                props.onSignIn(user.login);
                setData({
                    login: "",
                    password: ""
                });
                props.history.push(`/`);
            } else {
                setData({
                    login: "аккаунт не существует",
                    password: ""
                });
            }
        }
    }

    let isValid = true;
    function validate() {

        if (data.login == "") {
            formError.login = "Введите логин";
            isValid = false;
        } else {
            formError.login = "";
        }

        if (data.password == "") {
            formError.password = "Введите пароль";
            isValid = false;
        } else {
            formError.password = "";
        }
        setFormError({ ...formError });
        return isValid;
    }

    return <div className="regform">
        <div className="container ">
            <div className="row-application-form ">
                <div className="application-form">
                    <form onSubmit={signIn} className="reg-form">
                        <h4 className="row " >Вход</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-label">
                                    <label htmlFor="FIO">Логин:</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-control">
                                    <input type="text" id="form2Example1" value={data.login} className="form-control" onChange={handleLoginChange} placeholder="Введите логин" />
                                    {formError.login != "" && <div className="redcolor">{formError.login}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-label">
                                    <label htmlFor="email">Пароль</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-control">
                                    <input type="password" id="form2Example2" value={data.password} className="form-control" onChange={handlePasswordChange} placeholder="Введите пароль " />
                                    {formError.password != "" && <div className="redcolor">{formError.password}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                            </div>
                            <div className="col-lg-6">
                                <div className="form-control">
                                    <button type="submit" >Войти</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        users: state.university.users
    }
};

const mapDispatchToProps = dispatch => ({
    onSignIn: (login) => dispatch({
        type: SIGNIN, login
    })
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(SignIn);