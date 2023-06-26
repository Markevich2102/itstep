const React = require("react");
const connect = require("react-redux").connect;
const { COMMENTADD_POST } = require("../actions/actions.jsx");

const FormComment = (props) => {
    const routeParams = props; 

    let [data, setData] = React.useState({
        postId: props.id,
        author: "",
        text: ""
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onCommentAdd(props.id, data);
        setData({
            postId: props.id,
            author: "",
            text: ""
        });
    }

    function handleAuthorChange(event) {
        setData({ ...data, author: event.target.value });
    }

    function handleTextChange(event) {
        setData({ ...data, text: event.target.value });
    }

  

    return (<>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="author" className="form-label" >Автор</label>
                <input type="text" className="form-control" id="author" onChange={handleAuthorChange} value={data.author} />

            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Текст</label>
                <textarea className="form-control" id="text" rows="3" onChange={handleTextChange} value={data.text} />

            </div>
            
            <div className="mb-3">

                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)

};

const mapStateToProps = (state) => {

    return { }

}


const mapDispatchToProps = dispatch => ({
    onCommentAdd: (id,comment) => {
        dispatch({
            type: COMMENTADD_POST, id, comment
        })
    }
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(FormComment);