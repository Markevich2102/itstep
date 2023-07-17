const redux = require("redux");
const university = require("./university.jsx");
const connectRouter = require("connected-react-router").connectRouter;

const reducers = (history) => redux.combineReducers({
    university: university,
    router: connectRouter(history)
})


module.exports = reducers;




