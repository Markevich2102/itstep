const React = require("react");
const connect = require("react-redux").connect;
const { DELETE_POST } = require("../actions/actions.jsx");
const FormComment = require("./FormComment.jsx");


const Detail = (props) => {

    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе

    const post = props.posts.find((post) => post.id == routeParams.id);
    

   

    return <>
        <div> {post.id}</div>
        <div> {post.title}</div>
        <div> {post.text}</div>
        <div><img src={`/public/assets/img/${post.image}`} className="card-img-top" alt={post.image} /></div>
        <div>{post.date.toLocaleDateString()}</div>
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
        <FormComment id={post.id}/>

    </>
}

const mapStateToProps = state => {
    return {
        posts: state.post.posts, //post -  название reducer, описанного в /reducer/index.jsx, posts - массив продуктов
        comments: state.post.comments

    }
};

const mapDispatchToProps = dispatch => ({
    onDeletePost: (postId) => {
        dispatch({
            type: DELETE_POST, postId
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Detail);