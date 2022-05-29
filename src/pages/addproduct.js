import '../App.css';
import Button from 'react-bootstrap/Button';
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
            temperature: '',
        }
        this.teaForm = React.createRef();
        this.coffeeForm = React.createRef();
        this.teaImg = React.createRef();
        this.coffeeImg = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleCAdd = this.handleCAdd.bind(this);
        this.handleTAdd = this.handleTAdd.bind(this);
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

    handleCAdd(product) {
        const obj = { id: 0, type: "Coffee", productname: this.state.temperature+" "+this.state.productname, small: "$" + this.state.small, medium: "$" + this.state.medium, large: "$" + this.state.large }
        api.post('/', obj)
            .then(res => {
                let { coffe } = this.state;
                coffe.push(res.data);
                this.setState({ coffe });
            })
    }

    handleTAdd(product) {
        const obj = { id: 0, type: "Tea", productname: this.state.temperature+" "+this.state.productname, small: "$" + this.state.small, medium: "$" + this.state.medium, large: "$" + this.state.large }
        api.post('/', obj)
            .then(res => {
                let { coffe } = this.state;
                coffe.push(res.data);
                this.setState({ coffe });
            })
    }

    openCForm() {
        this.coffeeForm.current.style.display = "block";
        this.coffeeImg.current.style.display = "none";
    }

    openDForm() {
        this.teaForm.current.style.display = "block";
        this.teaImg.current.style.display = "none";
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
                                        ref={this.coffeeImg}
                                        src={require("../images/coffee-names.jpg")}
                                        id="coffe-img"
                                        alt="coffee-names"
                                    />
                                    <div className='add-coffee-form' id='add-coffee-form' ref={this.coffeeForm}>

                                        <p>Add more coffee to your menu here:</p>
                                        <form onSubmit={this.handleCAdd}>
                                            <label>
                                                Coffee Name:
                                                <br></br>
                                                {/* <input type="text" name="productname" onChange={this.handleChange} /> */}
                                                <select required name="productname" className="add-form-format" onChange={this.handleChange}>
                                                    <option selected disabled value="Null">Select Coffee</option>
                                                    <option value="Americano">Americano</option>
                                                    <option value="Cappuccino">Cappuccino</option>
                                                    <option value="Espresso">Espresso</option>
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
                                                <input type="text" className="add-form-format" disabled name="type" defaultValue="Coffee" onChange={this.handleChange} />
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
                                            <div class="radio-toolbar" onChange={this.handleChange}>
                                                <input type="radio" name="temperature" value="Iced" />
                                                <label for="iced">Iced &nbsp;</label>
                                                <input type="radio" name="temperature" value="Normal" checked />
                                                <label for="normal">Normal</label><br></br>
                                            </div>
                                            <Button type="submit" className="btn btn-outline-dark">Add Coffee to Menu!</Button>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <div className='col-md-6 col-sm-4 col-lg-4'>
                                <Button type="button" id="add-product-btn" variant='dark' onClick={this.openDForm}>Add Tea</Button>
                                <div className='row justify-content-center'>
                                    <img
                                        ref={this.teaImg}
                                        src={require("../images/tea-names.jpg")}
                                        id="tea-img"
                                        alt="tea names"
                                    />
                                    <div className='add-tea-form' id='add-tea-form' ref={this.teaForm}>
                                        <p>Add more tea to your menu here:</p>
                                        <form onSubmit={this.handleTAdd}>
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
                                                <input type="text" className="add-form-format" disabled name="type" defaultValue='Tea' onChange={this.handleChange} />
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
                                            <div class="radio-toolbar">
                                                <input type="radio" name="temperature" value="Iced" onChange={this.handleChange}/>
                                                <label for="iced">Iced &nbsp;</label>
                                                <input type="radio" name="temperature" value="Normal" checked onChange={this.handleChange}/>
                                                <label for="normal">Normal</label><br></br>
                                            </div>
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
