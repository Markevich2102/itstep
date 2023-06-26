const React = require("react");
const connect = require("react-redux").connect;


const UserInfo = (props) => { //props.user

    return <>
        <div>
            Мой блог
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        user: state.post.user //post -  название reducer, описанного в /reducer/index.jsx
    }
};

const mapDispatchToProps = dispatch => ({});

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserInfo);