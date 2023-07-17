const React = require("react");
const connect = require("react-redux").connect;

/*const { DELETE_POST, EDIT_POST, LIKE_POST } = require("../actions/actions.jsx");*/


const ListComments = (props) => {
    //props.posts, props.onPostDelete

    /*function handleButtonDelete(event) {
        props.onDeletePost(+event.currentTarget.dataset.id);
    }*/

/*
    return <>
        <div>Комментарии {props.comments.map((comment, index) => {
            return <div className="card" key={comment.id}>
                <div className="card-body">
                    <p className="card-id">#{index + 1} {comment.id}</p>
                    <p className="card-postId">{comment.postId} </p>
                    <p className="author"><small className="text-body-secondary">{comment.author}</small></p>
                    <p className="card-text"><small className="text-body-secondary">{comment.text}</small></p>
                </div>

            </div>
        })}</div>
       

    </>
*/
}

const mapStateToProps = state => {
    return {
        universities: state.university.universities, //post -  название reducer, описанного в /reducer/index.jsx, posts - массив продуктов
        comments: state.university.comments
    }
};

const mapDispatchToProps = dispatch => ({
   
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(ListComments);
