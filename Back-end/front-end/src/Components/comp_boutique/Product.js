import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/CartAction'
import './product.css'

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }
    buyNow = product => {
        this.setState({clicked: true})
        this.props.addToCart(product)
    }
    remove = id => {
        this.setState({clicked: false})
        this.props.removeFromCart(id)
    }
    render() {

        const { product } = this.props;
        return (

            //  <div className="col-md-3">
            //  <figure className="card card-product" style={{ width: '100%' }}>
            //      <div className="img-wrap">
            //          <img className="img-responsive " src={product.image} />
            //           {/* objectfit css  */}
            //  </div>
            //     <figcaption className="info-wrap">
            //         <h4 className="title_product">{product.title}</h4>
            //         <p className="desc">{product.description}</p>
            //     </figcaption>
            //     <div className="bottom-wrap">

            //         {
            //             this.props.cart.cart.filter(el => el.id === product.id).length > 0 ? (
            //                 <span className="alert alert-success">Added to cart</span>
            //             ) : (
            //                     <a href="#" onClick={() => this.props.addToCart(product)}
            //                         className="btn btn-sm btn-primary float-right">Add to cart</a>
            //                 )
            //         }

            //         <div className="price-wrap h5">
            //             <span className="price-new">${product.price}</span>
            //         </div>
            //     </div> 
            //  </figure> 
            // </div>

            <div className="wrapper">
                <div className="contai">
                    <div className="top">
                        <img src={product.image} />
                    </div>
                    <div className={this.state.clicked ? "bottom clicked" : "bottom"}>
                        <div className="left">
                            <div className="details">
                                <h6>{product.title}</h6>
                                <p>{product.price}£</p>
                            </div>
                            <div onClick={() => this.buyNow(product)} className="buy">
                                <i className="material-icons" >add_shopping_cart</i>
                                </div>
                        </div>
                        <div className="right">
                            <div className="done"><i className="material-icons">done</i></div>
                            <div className="details">
                                <h4>{product.title}</h4>
                                <p >Added to your cart</p>
                            </div>
                            <div onClick={() => this.remove(product.id)} className="remove"><i className="material-icons">clear</i></div>
                        </div>
                    </div>
                </div>
                <div className="inside">
                    <div className="icon"><i className="material-icons">info_outline</i></div>
                    <div className="contents">
                        <table>

                        </table>
                    </div>
                </div>
            </div>




        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cartReducer
    }
};
export default connect(mapStateToProps, { addToCart, removeFromCart })(Product);