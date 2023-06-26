const React = require("react");
const Form = require("../components/Form.jsx");
const List = require("./List.jsx");
const { Route, Switch } = require("react-router");
const UserInfo = require("./UserInfo.jsx");
const Detail = require("./Detail.jsx");
const Header = require("./Header.jsx");
const FormEdit = require("./FormEdit.jsx");
const FormComment = require("./FormComment.jsx");

const AppView = (props) => {

    return <>
        <Header />
        <Switch>
            <Route exact path="/" component={UserInfo} />
            <Route path="/product/add" component={Form} />
            <Route path="/product/edit/:id" component={FormEdit} />{/*пишем в первую очередь*/}
            <Route path="/product/comment/:id" component={FormComment} />{/*пишем в первую очередь*/}
            <Route path="/product/:id" component={Detail} /> {/*:id - параметр адреса*/}
            <Route path="/product/" component={List} />

        </Switch>
    
    </>
}

module.exports = AppView;