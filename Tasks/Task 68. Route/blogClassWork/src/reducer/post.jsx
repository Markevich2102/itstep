const reducer = (state = {}, action) => {

    switch (action.type) {

        case "INIT":
            return {
                ...state,
                posts: action.posts,
                comments: action.comments,
                lastIdPost: action.lastIdPost,
                lastIdComment: action.lastIdComment
            }

        case "POST_ADD":
            let newId = ++state.lastIdPost;
            let newPost = {
                id: newId,
                title: action.post.title,
                text: action.post.text,
                image: action.post.image,
                date: new Date()
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                lastIdPost: newId
            };

        case "POST_COMMENTADD":
            let newIdComment = ++state.lastIdComment;
            let newComment = {
                id: newIdComment,
                postId: action.comment.postId,
                author: action.comment.author,
                text: action.comment.text,
                
            };
            return {
                ...state,
                comments: [...state.comments, newComment],
                lastIdComment: newIdComment
            };
            

        case "POST_DELETE":
            return {
                ...state,
                posts: state.posts.filter((item) => item.id != action.postId)
            };

        case "POST_LIKE":
            return {
                ...state,
                posts: state.posts.map((item) => {
                    if (item.id == action.id) {
                        item.favorite = true;
                    }
                    return item;
                })
            };

        case "POST_EDIT":
            return {...state,
                posts: state.posts.map((item) => {
                    if (item.id == action.id) {
                        item.title = action.post.title;
                        item.text = action.post.text;
                        item.image = action.post.image;
                    }
                    return item;
                })
            }
            break;

    }

    return state;
}

module.exports = reducer;