import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import '../comp_boutique/Comp_Boutique.css';
// import {addToCart} from "../../actions/CartAction";
 
 
class ProductList extends Component{

 
    render() {
        return (
            <div className="container_product_list">
                <div className="row">
 
                    {
                        this.props.products.items.map(product => <Product
                            product={product} 
                            // addToCart={this.addToCart} 
                            inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 }
                            key={product.id}
                            /> )
                    }
 
                </div>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        products: state.ProductReducer,
        cart: state.cartReducer
    }
};
 

 
 
export default connect(mapStateToProps)(ProductList)