const React = require("react");
const Form = require("../components/Form.jsx");
const List = require("./List.jsx");
const { Route, Switch } = require("react-router");
const UserInfo = require("./UserInfo.jsx");

const AppView = (props) => {

    return <>
        <Switch>
            <Route exact path="/" component={UserInfo} />
            <Route path="/product/add" component={Form} />
            <Route path="/product/" component={List} />
        </Switch>
    
    </>
}

module.exports = AppView;