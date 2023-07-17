const React = require("react");
const connect = require("react-redux").connect;
const { EDIT_POST} = require("../actions/actions.jsx");


const FormEdit = (props) => {

    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе
    const post = props.posts.find((post) => post.id == routeParams.id);
    
    let [data, setData] = React.useState({
        title: post.title,
        text: post.text,
        image: post.image,
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onPostEdit(post.id,data);
        setData({
            title: "",
            text: "",
            image: "no-image.png",
        });
        props.history.push("/post/")//редирект
    }

    function handleTitleChange(event) {
        setData({ ...data, title: event.target.value });
    }

    function handleTextChange(event) {
        setData({ ...data, text: event.target.value });
    }

    function handleImageChange(event) {
        setData({ ...data, image: event.target.value });
    }

    return (<>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label" >Название</label>
                <input type="text" className="form-control" id="title" onChange={handleTitleChange} value={data.title} />

            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Текст</label>
                <textarea className="form-control" id="text" rows="3" onChange={handleTextChange} value={data.text} />

            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Картинка</label>
                <input type="text" className="form-control" id="image" onChange={handleImageChange} value={data.image} />

            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Сохранить</button>
                <button type="button" className="btn btn-secondary" onClick={() => { props.history.push("/post/") }}>Отмена</button>
            </div>
        </form>
    </>)

};

const mapStateToProps = (state) => {

    return {
        posts:state.post.posts
    }

}


const mapDispatchToProps = dispatch => ({
    onPostEdit: (id,post) => {
        dispatch({
            type: EDIT_POST, id,post
        })
    }
});
module.exports = connect(mapStateToProps, mapDispatchToProps)(FormEdit);