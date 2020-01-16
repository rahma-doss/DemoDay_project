import React, { Component } from 'react';
import { connect } from 'react-redux';
import './coachblog.css';
import { remove } from '../../actions/ActionBlog';
import { MDBNavLink } from 'mdbreact';
import Modal from '../modalBlog/Modal';
import CardBlog from './cardblog';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    const { blog } = this.props;
    return (
      // <div className="blog-card shadow-lg p-3 mb-5 bg-white rounded ">
      //     <div className="custom-image">
      //         <img className="img-blog" src={blog.picture} />
      //     </div>
      //     <div className="custom-card">
      //         <h3>{blog.title}</h3>
      //         <p>{blog.date}</p>
      //         <div className="text-center">
      //             <MDBNavLink
      //                 exact
      //                 to={`/article/${blog.id}`}
      //             >
      //                 <button type="button" className="btn btn-info btn-rounded">Blog Description</button>
      //             </MDBNavLink>
      //             <Modal infos={blog} editMode={true} />
      //             <button onClick={() => this.props.delete(blog.id)} type="button" class="btn btn-outline-info waves-effect ">Remove</button>
      //         </div>
      //     </div>
      // </div>


      <article className="large-container" >

        <div className="post-img-wrap-large" >
          <a href="" title={blog.title}>
            <picture>

              <img src={blog.picture}  />

            </picture>
          </a>
        </div>
        <div className="listpost-content-wrap-large">
          <div className="list-post-top">
            <header className="entry-header">

              <h2 className="entry-title" itemprop="headline">
                <a href="#" rel="bookmark">{blog.title}</a>
              </h2>
            </header>

            <div className="entry-content" itemprop="text">
              <p>
                {blog.intro}
              <MDBNavLink exact to={`/article/${blog.id}`} >[…]  </MDBNavLink>
                 
            </p>


          </div>
            </div>

            <footer className="entry-footer-large">

              <div className="entry-meta-large">
                <span className="posted-on">
                  Posted on <a href="#" rel="bookmark">
                    <time className="entry-date published">
                      {blog.date}</time>

                  </a>
                </span>
                <span className="byline">
                  by <span className="author vcard" itemprop="name">
                    <a href="#" className="url fn n author-link" >
                      Coach-INI</a>
                  </span>
                </span>

              </div>

              <div className="entry-footer-large-left">

                <span className="cat-links">

                  Posted in <a href="#" rel="category tag">Astuces</a>, <a href="" rel="category tag">Sport</a>
                </span>

              </div>


            </footer>

          </div>
        

</article>

        )
   }
   }
   
const mapDispatchToProps = dispatch => {
return {
          delete: id => dispatch(remove(id))
    };
    };
    export default connect(null, mapDispatchToProps)(Blog)
