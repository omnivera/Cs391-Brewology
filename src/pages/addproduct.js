
import '../App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
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
            type: '',
            productname: '',
            small: '',
            medium: '',
            large: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.openCForm = this.openCForm.bind(this);
        this.openDForm = this.openDForm.bind(this);
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
        console.log(this.state.type)
        const obj = { id: 0, type: this.state.type, productname: this.state.productname, small: "$" + this.state.small, medium: "$" + this.state.medium, large: "$" + this.state.large }
        api.post('/', obj)
            .then(res => {
                let { coffe } = this.state;
                coffe.push(res.data);
                this.setState({ coffe });
            })
    }
    openCForm() {
        document.getElementById("add-coffee-form").style.display = "block";
        document.getElementById("coffe-img").style.display = "none";
    }

    openDForm() {
        document.getElementById("add-tea-form").style.display = "block";
        document.getElementById("tea-img").style.display = "none";
    }

    render() {
        return (
            <div>
                <div className="card" >

                    <div className="card-body">
                        <h3 className="card-title">Choose Drink Type</h3>

                        <div className='row justify-content-center'>
                            <div className='col-md-6 col-sm-4 col-lg-4'>

                                <Button id="add-product-btn" type="button" variant='dark' onClick={this.openCForm} >Add coffee</Button>

                                <div className='row justify-content-center'>
                                    <img
                                        src={require("../images/coffee-names.jpg")}
                                        id="coffe-img"
                                    />
                                    <div className='add-coffee-form' id='add-coffee-form'>

                                        <p>Add more coffee to your menu here:</p>
                                        <form onSubmit={this.handleAdd}>
                                            <label>
                                                Coffee Name:
                                                <br></br>
                                                {/* <input type="text" name="productname" onChange={this.handleChange} /> */}
                                                <select required name="productname" className="add-form-format" onChange={this.handleChange}>
                                                    <option selected disabled value="Null">Select Coffee</option>
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
                                                Type:
                                                <br></br>
                                                <input type="text" className="add-form-format" disabled name="type" defaultValue="Coffee"  onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <label>
                                                Small price:
                                                <br></br>
                                                <input type="number" required min={2} max={10} className="add-form-format" name="small" onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <label>
                                                Medium price:
                                                <br></br>
                                                <input type="number" required min={4} max={20} className="add-form-format" name="medium" onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <label>
                                                Large price:
                                                <br></br>
                                                <input type="number" required min={7} max={45} className="add-form-format" name="large" onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <Button type="submit" className="btn btn-outline-dark">Add Coffee to Menu!</Button>
                                        </form>
                                    </div>

                                </div>




                            </div>

                            <div className='col-md-6 col-sm-4 col-lg-4'>

                                <Button type="button" id="add-product-btn" variant='dark' onClick={this.openDForm}>Add Tea</Button>

                                <div className='row justify-content-center'>



                                    <img
                                        src={require("../images/tea-names.jpg")}
                                        id="tea-img"
                                    />


                                    <div className='add-tea-form' id='add-tea-form'>
                                        <p>Add more tea to your cart here:</p>
                                        <form onSubmit={this.handleAdd}>
                                            <label>
                                                Tea Name:
                                                <br></br>
                                                {/* <input type="text" name="productname" onChange={this.handleChange} /> */}
                                                <select required name="productname" className="add-form-format" onChange={this.handleChange}>
                                                    <option selected disabled value="Null">Select Tea</option>
                                                    <option value="Black Tea">Black Tea</option>
                                                    <option value="Green Tea">Green Tea</option>
                                                    <option value="Oolong Tea">Oolong Tea</option>
                                                    <option value="Pu-erh">Pu-erh</option>
                                                    <option value="Yellow Tea">Yellow Tea</option>
                                                    <option value="Herbal Tea">Herbal Tea</option>
                                                    <option value="Yerba Mate and Guayusa">Yerba Mate and Guayusa</option>
                                                </select>
                                            </label>
                                            <br></br>
                                            <label>
                                                Type:
                                                <br></br>
                                                <input type="text" className="add-form-format" disabled name="type" value={'Tea'} onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <label>
                                                Small price:
                                                <br></br>
                                                <input type="number" required min={2} max={10} className="add-form-format" name="small" onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <label>
                                                Medium price:
                                                <br></br>
                                                <input type="number" required min={4} max={20} className="add-form-format" name="medium" onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <label>
                                                Large price:
                                                <br></br>
                                                <input type="number" required min={7} max={45} className="add-form-format" name="large" onChange={this.handleChange} />
                                            </label>
                                            <br></br>
                                            <Button type="submit" className="btn btn-outline-dark">Add Tea to Menu!</Button>
                                        </form>
                                    </div>
                                </div>


                            </div>



                        </div>




                    </div>
                </div>





            </div>
        );
    }
}

export default Menu;
