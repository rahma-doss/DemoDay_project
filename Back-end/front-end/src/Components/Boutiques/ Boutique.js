import React, { Component } from 'react';
import { connect } from 'react-redux'
import Search from '../search_blog_boutique/Search';
import ProductList from '../comp_boutique/ProductList';
import { MDBBadge } from 'mdbreact';
import Navbar  from '../Navbar/Navbar'
import './Boutique.css'

class Boutique extends Component {


  searchBlog = y => {
    this.setState({
      keyword: y
    })
  }

  render() {

    return (
    <div>
    
    
    <div className='image_boutique'>
      <div className='Navbarssss'>
    <Navbar bg={true} />
    <Search searchProduct={true} />
    </div>
      
    </div>
      <div className="App">
        
        <div className="d-flex justify-content-between">
          
            {/* <div>
                <i class="fas fa-shopping-cart"></i>
                <MDBBadge color="danger" className="ml-2">{this.props.cart.cart.length}</MDBBadge>
            </div> */}
        </div>
        <ProductList />
      </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return{
        cart: state.cartReducer
    }
}
export default connect(mapStateToProps)(Boutique)