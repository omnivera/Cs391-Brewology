
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Fulltable from '../components/fulltable';
import React, { Component } from 'react';




const api = axios.create({ baseURL: `http://localhost:3000/coffe` });
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      message: '...Getting products, please wait...'
    }
    this.handleDelete = this.handleDelete.bind(this);
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



  handleAdd(product) {
    api.post('/', product)
      .then(res => {
        let { products } = this.state;
        products.push(res.data);
        this.setState({ products });
      })
  }

  handleDelete(id) {
    api.delete(`/${id}`).then(
      this.setState(
        (state) => ({
          products: state.products.filter(
            (element) => { return id !== element.id; })
        })
      )
    )
  }

  render() {
    return (
      <div className='menu-bg'>
        <div className='tablecont'>

          <Fulltable
            list={this.state.products}
            onDelete={this.handleDelete}>
          </Fulltable>
        </div>
      </div>
    );
  }
}

export default Menu;
