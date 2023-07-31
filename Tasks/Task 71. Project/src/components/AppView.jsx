const React = require("react");
const { Route, Switch } = require("react-router");
const Main = require("./Main.jsx");
const Header = require("./Header.jsx");
const FormComment = require("./FormComment.jsx");
const Footer = require("./Footer.jsx");
const Universitety = require("./Universitety.jsx"); {/*все университеты*/ }
const ChoiceSpecialties = require("./ChoiceSpecialties.jsx");
const ApplicationForm = require("./ApplicationForm.jsx");
const Specialties = require("./Specialties.jsx"); {/*все специальности*/ }
const DetailUniversity = require("./DetailUniversity.jsx"); {/*выбранный один университет*/ }
const DetailSpecialty = require("./DetailSpecialty.jsx");
const SignUp = require("../auth/SignUp.jsx");
const SignIn = require("../auth/SignIn.jsx");
const Project = require("./Project.jsx");

const AppView = (props) => {

    return <>
        <Header />

        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/universitety/" component={Universitety} />
            <Route path="/specialties/" component={Specialties} />
            <Route exact path="/choiceSpecialties/" component={ChoiceSpecialties} />
            <Route exact path="/applicationForm/" component={ApplicationForm} />
            <Route path="/detailUniversity/comment/:id" component={FormComment} />{/*в 1 очередь!!!(:id - параметр адреса)*/}
            <Route path="/detailUniversity/:id" component={DetailUniversity} />{/*во 2 очередь!!!(:id - параметр адреса)*/}
            <Route path="/detailSpecialty/:id" component={DetailSpecialty} />{/*в 1 очередь!!!(:id - параметр адреса)}*/}
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/project" component={Project} />
        </Switch>
        <Footer />
    </>
}

module.exports = AppView;