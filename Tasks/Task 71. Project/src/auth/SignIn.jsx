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
        //n("/signin");
        //props.push("/signin") ;
        if (!validate()) {
            return false;
        }else{
            if (user !== undefined) {
                props.onSignIn(user.login);
                //props.history("/signin") ;
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
            {/*<div className="row justify-content-between ">
                <div className="col-lg-6 col-lg-6  col-md-6 col-12">
                    <form onSubmit={signIn}>
                        <div className="form-outline mb-4">
                            <input type="text" id="form2Example1" value={data.login} className="form-control" onChange={handleLoginChange}/>
                            <label className="form-label" htmlFor="form2Example1">Login</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" value={data.password} className="form-control" onChange={handlePasswordChange}/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                    </form> {error1 != "" && <div className="redcolor">ghbdtn {error1}</div>}
                </div>
                <div className="col-lg-6 col-lg-6  col-md-6 col-12">
                    {props.users.map((user) => {
                        return <>
                            <div>{user.login}</div>
                            <div>{user.password}</div>
                        </>
                    })}
                </div>
                </div>*/}

            {/*<div className="row-application-form">
                <div className="application-form">
                    <form action="" method="post" name="reg_form" className="reg-form" onSubmit={signUp}>
                        <div className="row redcolor" >Регистрация</div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-label">
                                    <label htmlFor="FIO">Логин:</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-control">
                                    <input type="text" name="FIO" id="FIO" onChange={handleLoginChange} value={data.login} placeholder="Введите логин" />{error != "" && <div className="redcolor">{error}</div>}
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
                                    <input type="text" name="email" id="email" onChange={handlePasswordChange} value={data.password} placeholder="Введите пароль" />{error != "" && <div className="redcolor">{error}</div>}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                            </div>
                            <div className="col-lg-6">
                                <div className="form-control">
                                    <button type="submit">Зарегистрироваться</button>
                                </div>
                            </div>
                        </div>  

                    </form>
                </div>
            </div>*/}
            {/*<div className="row justify-content-between ">
                <div className="col-lg-6 col-lg-6  col-md-6 col-12">
                    <form onSubmit={signUp}>
                        <div className="form-outline mb-4">
                            <input type="text" id="form2Example1" value={data.login} className="form-control" onChange={handleLoginChange}/>
                            <label className="form-label" htmlFor="form2Example1">Login</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" value={data.password} className="form-control" onChange={handlePasswordChange}/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                    </form> 
                </div>
                <div className="col-lg-6 col-lg-6  col-md-6 col-12">
                    {props.users.map((user) => {
                        return <>
                            <div>{user.login}</div>
                            <div>{user.password}</div>
                        </>
                    })}
                </div>
                </div>*/}

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
                {/*<div className="col-lg-6 col-lg-6  col-md-6 col-12">
                    {props.users.map((user) => {
                        return <>
                            <div>{user.login}</div>
                            <div>{user.password}</div>
                        </>
                    })}
                </div>*/}
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