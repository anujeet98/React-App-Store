import React, {useState, useContext} from "react";
import Card from "../UI/Card";
import "./MainForm.css";
import Button from "../UI/Button";
import ProductContext from "../../contexts/store/product-context";

const MealsSummary = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const prodCtx = useContext(ProductContext);

    const setDescriptionHandler = (event) => {
        setDescription(event.target.value);
    }
    const setPriceHandler = (event) => {
        setPrice(event.target.value);
    }
    const setNameHandler = (event) => {
        setName(event.target.value);
    }
    const formSubmitHandler = (event) =>{
        event.preventDefault();

        if(name.trim().length===0)
            return alert("Candy name cannot be empty");
        else if(description.trim().length===0)
            return alert("Description cannot be empty");
        else if(price<=0)
            return alert("Price cannot be negative or 0");

        const item = {
            name: name,
            description: description,
            price: price,
        }

        prodCtx.addProduct(item);
        setName('');
        setDescription('');
        setPrice(0);
    }
  return (
    <React.Fragment>
      <Card className="form-outer">
        <form className='form-main' onSubmit={formSubmitHandler}>
            <div className='form-element-group'>
                <label>Candy Name</label>
                <input type='text' onChange={setNameHandler} value={name} required></input>
            </div>
            <div className='form-element-group'>
                <label>Description</label>
                <input type='text' onChange={setDescriptionHandler} value={description} required></input>
            </div>
            <div className='form-element-group'>
                <label>Price</label>
                <input type='number' onChange={setPriceHandler} min={1} value={price} required></input>
            </div>

            <div className='form-element-group'>
                <Button attributes={{className:'submitBtn', type:'submit'}}>Add</Button>
            </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default MealsSummary;
