const React = require("react");
const connect = require("react-redux").connect;
/*const { DELETE_POST, EDIT_POST, LIKE_POST } = require("../actions/actions.jsx");*/

const List = (props) => {
    //props.posts, props.onPostDelete

    /*function handleButtonDelete(event) {
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
                            <button className="button_view" onClick={() => { props.history.push(`/post/${post.id}`) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <button type="button" className="btn btn-primary" onClick={() => { props.history.push(`/post/edit/${post.id}`) }}>Редактировать</button>&nbsp;
                            <button type="button" className="btn btn-danger" data-id={post.id} onClick={handleButtonDelete} >Удалить</button>
                        </div>
                    </div>
                })  
            }
        </div>
    </>
*/
}

const mapStateToProps = (state) => {

    return {
        universities: state.university.universities, //post -  название reducer, описанного в /reducer/index.jsx, posts - массив продуктов
        comments: state.university.comments
    }

}

const mapDispatchToProps = dispatch => ({
   /* onDeletePost: (postId) => {
        dispatch({
            type: DELETE_POST, postId
        })
    },
    onEditPost: (id, post) => {
        dispatch({
            type: EDIT_POST, id,post
        })
    },
    onLikePost: (id) => {
        dispatch({
            type: LIKE_POST, id
        })
    }*/
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(List);
