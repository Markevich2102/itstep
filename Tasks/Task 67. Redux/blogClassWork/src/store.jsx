/*
state = {
    posts: [
        {
            id,
            title,
            text,
            image
        }
    ],
    lastIdPost //- id последнего добавленного поста
}
*/
const reducer = require("./reducer/index.jsx");
const redux = require("redux");

const createBrowserHistory = require('history').createBrowserHistory;
const routerMiddleware = require("react-router-redux").routerMiddleware;

const history = createBrowserHistory();
const store = redux.createStore(reducer(history), {},
    redux.compose(
        redux.applyMiddleware(
            routerMiddleware(history)
        )
    )
);


store.dispatch({
    type: "INIT",
    posts: [
        {
            id: 1,
            title: "Цветные карандаши",
            text: "Цветные карандаши картинка ",
            image: "image4.jpg",
            date: new Date()
        }
    ],
    lastIdPost: 1,
});

module.exports = { store, history };