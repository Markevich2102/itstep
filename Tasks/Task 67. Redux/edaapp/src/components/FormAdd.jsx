const React = require("react");

const FormAdd = (props) => {

    let [data, setData] = React.useState({
        name: "",
        price: "",
        quantity: "",
        units: "",
        favorite: false,
        image: ""
    })


    const [formError, setFormError] = React.useState({
        name: "",
        price: "",
        quantity: "",
        units: "",
        image: ""
    }); 



    function handleFormSubmit(event) {
        event.preventDefault();
    
        if (!validate()) {
            return false;
        } else {  
            props.onProductAdd(data);
            setData({
                name: "",
                price: "",
                quantity: "",
                units: "",
                favorite: false,
                image: ""
            });
        }
    }

    function handleNameChange(event) {
        setData({ ...data, name: event.target.value });
    }

    function handlePriceChange(event) {
        setData({ ...data, price: event.target.value });
    }

    function handleQuantityChange(event) {
        setData({ ...data, quantity: event.target.value });
    }

    function handleFavoriteChange(event) {
        setData({ ...data, favorite: event.target.checked });

    }

    function handleUnitsChange(event) {
        setData({ ...data, units: event.target.value });
    }

    function handleImageChange(event) {
        setData({ ...data, image: event.target.value });
    }

    function validate() {
        let isValid = true;
        if (data.name == "") {
            formError.name = "Поле не заполнено";
            isValid = false;
        } else {
            formError.name = "";
        }
        if (data.price == "") {
            formError.price = "Поле не заполнено";
            isValid = false;
        } else {
            formError.price = "";
        }
        if (data.quantity == "") {
            formError.quantity = "Поле не заполнено";
            isValid = false;
        } else {
            formError.quantity = "";
        }
        if (data.image == "") {
            formError.image = "Картинка не выбрана";
            isValid = false;
        } else {
            formError.image = "";
        }
        setFormError({ ...formError });
        return isValid;
    }


    return (<>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Название</label>
                <input type="text" className="form-control" id="name" onChange={handleNameChange} value={data.name} />{formError.name != "" && <div>{formError.name}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Цена</label>
                <input type="text" className="form-control" id="price" onChange={handlePriceChange} value={data.price} />{formError.price != "" && <div>{formError.price}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Количество</label>
                <input type="text" className="form-control" id="quantity" onChange={handleQuantityChange} value={data.quantity} />{formError.quantity != "" && <div>{formError.quantity}</div>}
            </div>
            <div className="col-lg-6">
                <label htmlFor="units" className="form-label">Единицы измерения</label>
                <div className="form-control">
                    <select name="units" id="units" onChange={handleUnitsChange}>
                        <option value="Выберите единицы измерения">Выберите единицы измерения </option>
                        <option value="КГ">КГ</option>
                        <option value="ШТ">ШТ</option>
                        <option value="Л">Л</option>
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="favorite" onChange={handleFavoriteChange} checked={data.favorite} />
                    <label className="form-check-label" htmlFor="favorite">
                        Избранное
                                </label>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Картинка</label>
                <input type="text" className="form-control" id="image" value={data.image} onChange={handleImageChange} />
                {formError.image != "" && <div>{formError.image}</div>}
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)
}

module.exports = FormAdd;