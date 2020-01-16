import React, { Component } from 'react';
import './BlogComponent.css';
import Modal from '../modalBlog/Modal';
import Search from '../search_blog_boutique/Search';
import BlogListe from '../blog_liste/BlogListe';
import Navbar from '../Navbar/Navbar'
import CardBlog from '../blog/cardblog';

class BlogComponent extends Component {


  searchBlog = y => {
    this.setState({
      keyword: y
    })
  }

  render() {

    return (
      <div className="App">
        <Navbar bg={true} />
        <div className="d-flex justify-content-between">
          {/* <Search searchProduct={false} /> */}
        </div>
        <div className='blogcomponent'>
          <div className='listeblog'>
            <BlogListe />
          </div>
          <div className='part2'>
         
          <CardBlog />
          <Modal editMode={false} />
          </div>
          
        </div>
      </div>
    )
  }
}
export default BlogComponent