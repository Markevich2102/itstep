const React = require("react");
const connect = require("react-redux").connect;
const { POST_DELETE, POST_EDIT, POST_LIKE } = require("../actions/actions.jsx");

const List = (props) => {
    //props.posts, props.onPostDelete

    function handleButtonDelete(event) {
        props.onDeletePost(+event.currentTarget.dataset.id);
    }

    return <>
        <div className="blog_posts">
            {
                props.posts.map((post, index) => {
                    return <div className="card mb-3" key={post.id}>
                        <img src={`/public/assets/img/${post.image}`} className="card-img-top" alt={post.title} />
                        <div className="card-body">
                            <p className="card-title">#{index + 1} {post.title}</p>
                            <p className="card-text">{post.text} </p>
                            <p className="card-text"><small className="text-body-secondary">{post.date.toLocaleDateString()}</small></p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            <button type="button" className="btn btn-primary">Редактировать</button>&nbsp;
                            <button type="button" className="btn btn-danger" data-id={post.id} onClick={handleButtonDelete} >Удалить</button>
                        </div>
                    </div>
                })
            }
        </div>
    </>

}

const mapStateToProps = (state) => {

    return {
        posts: state.post.posts
    }

}

const mapDispatchToProps = dispatch => ({
    onDeletePost: (postId) => {
        dispatch({
            type: POST_DELETE, postId
        })
    },
    onEditPost: (id, post) => {
        dispatch({
            type: POST_EDIT, id,post
        })
    },
    onLikePost: (id) => {
        dispatch({
            type: POST_LIKE, id
        })
    }
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(List);
