const React = require("react");
const Form = require("../components/Form.jsx");
const List = require("./List.jsx");
const { Route, Switch } = require("react-router");
const UserInfo = require("./UserInfo.jsx");
const Detail = require("./Detail.jsx");
const Header = require("./Header.jsx");
const FormEdit = require("./FormEdit.jsx");
const FormComment = require("./FormComment.jsx");
const ListComments = require("./ListComments.jsx");

const AppView = (props) => {

    return <>
        <Header />
        <Switch>
            <Route exact path="/" component={UserInfo} />
            <Route path="/post/add" component={Form} />
            <Route path="/post/edit/:id" component={FormEdit} />{/*пишем в первую очередь*/}
            <Route path="/post/comment/:id" component={FormComment} />{/*пишем в первую очередь*/}
            <Route path="/listComments" component={ListComments} />{/*пишем в первую очередь*/}
            <Route path="/post/:id" component={Detail} /> {/*:id - параметр адреса*/}
            <Route path="/post/" component={List} />

        </Switch>
    
    </>
}

module.exports = AppView;