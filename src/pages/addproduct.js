
import '../App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
//import CoffeeForm from '../components/coffeeform';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import React, { Component } from 'react';




const api = axios.create({ baseURL: `http://localhost:3000/coffe` });
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            quantity: '',
            productname: '',
            small: '',
            medium: '',
            large: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    getProducts = () => {
        api.get('/').then(res => {
            const list = res.data;
            this.setState({ products: list, message: "" });
        })
    }
    componentDidMount() {
        this.getProducts();
    }

    handleChange(event) { this.setState({ [event.target.name]: event.target.value }); }

    handleAdd(product) {
        const obj = {id:0, quantity: this.state.quantity, productname: this.state.productname, small: '$19.99', medium: '$29.99', large: '$39.99' }
        api.post('/', obj)
            .then(res => {
                let { coffe } = this.state;
                coffe.push(res.data);
                this.setState({ coffe });
            })
    }



    render() {
        return (

            <div className='add-coffee-form'>

                <p>Add more coffee to your cart here:</p>

                <form>
                    <label>
                        Coffee Name:
                        <br></br>
                        {/* <input type="text" name="productname" onChange={this.handleChange} /> */}
                        <select name="productname" className="add-form-format" onChange={this.handleChange}>
                            <option value="Null">Select Coffee</option>
                            <option value="Americano">Americano</option>
                            <option value="Cappuccino">Cappuccino</option>
                            <option value="Cappuccino">Espresso</option>
                            <option value="Irish coffee">Irish coffee</option>
                            <option value="Arabica">Arabica</option>
                            <option value="Cold Brew">Cold Brew</option>
                            <option value="Macchiato">Macchiato</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Quantity:
                        <br></br>
                        <input type="text" className="add-form-format" name="quantity" onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <Button type="submit" onClick={this.handleAdd}>Add</Button>
                </form>
            </div>
        );
    }
}

export default Menu;
