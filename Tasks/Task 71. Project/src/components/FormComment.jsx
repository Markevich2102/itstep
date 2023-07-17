const React = require("react");
const connect = require("react-redux").connect;
const { COMMENTADD_UNIVERSITY } = require("../actions/actions.jsx");
const FormComment = (props) => {
    const routeParams = props; 

    let [data, setData] = React.useState({
        universityId: props.id,
        author: "",
        text: ""
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onCommentAdd(props.id, data);
        setData({
            universityId: props.id,
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
        <form className="blog_form1" action="" onSubmit={handleFormSubmit}>
            <div className="mb-31">
                <label htmlFor="author" className="form-label1" >Автор отзыва</label>
                <input type="text" className="form-control1" id="author" onChange={handleAuthorChange} value={data.author} />

            </div>
            <div className="mb-31">
                <label htmlFor="text" className="form-label1">Отзыв </label>
                <textarea className="form-control1" id="text" rows="3" onChange={handleTextChange} value={data.text} />

            </div>
            
            <div className="mb-313">

                <button type="submit" className="floating-button" onClick={() => { props.history.push(`/detailUniversity/:id`) }}>Оставить отзыв</button>
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
            type: COMMENTADD_UNIVERSITY, id, comment
        })
    }
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(FormComment);