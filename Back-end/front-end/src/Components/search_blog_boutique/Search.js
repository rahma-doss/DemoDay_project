import React, { Component } from 'react';
import './Search.css'
import { connect } from 'react-redux';
import { search } from '../../actions/ActionBlog';
import { searchForProduct } from '../../actions/CartAction'
import { MDBBadge } from 'mdbreact';



class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",

        }
    }

    changeSearch = (e) => {
        this.setState({ name: e.target.value }, () => this.props.searchProduct ? this.props.findProduct(this.state.name)
            : this.props.rummage(this.state.name))
    }

    render() {
        const { } = this.state;
        return (

            // <div className="container d-flex justify-content-between">
            //     <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">

            //         <input onChange={this.changeSearch} type="search" placeholder={this.props.searchProduct ? "Type product name to search" : "Type blog name to search"} aria-describedby="button-addon1" value={this.state.name} className="form-control border-0 bg-light width" />

            //         <div className="input-group-append">
            //             <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
            //         </div>


            //     </div>



            // </div>
            <nav className="navbar_search"  >
                <form className="form-inline my-2 my-lg-0 ml-auto">
                    <input className="form-control"onChange={this.changeSearch} type="search" placeholder={this.props.searchProduct ? "Type product name to search" : "Type blog name to search"} aria-describedby="button-addon1" value={this.state.name}   style={{ width: '50%' }} />
                    <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit"><i className="fa fa-search"></i></button>
                  </form>
                   <div>
                    <i class="fas fa-shopping-cart"></i>
                    <MDBBadge color="danger" className="ml-2">{this.props.cart.cart.length}</MDBBadge>
                    </div>
                
            </nav>

        )
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        rummage: data => dispatch(search(data)),
        findProduct: data => dispatch(searchForProduct(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)