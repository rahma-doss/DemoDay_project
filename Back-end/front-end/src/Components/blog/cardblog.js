import React from 'react'
import './coachblog.css';
import Blog from './Blog';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class CardBlog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',

    }
  }
  changeSearch = (e) => {
    this.setState({ name: e.target.value }, () => this.props.searchProduct ? this.props.findProduct(this.state.name)
        : this.props.rummage(this.state.name))
}
  render() {
    const { blog } = this.props;
    return (
      <div className="sidebar-wrap col-md-9 content-left-wrap">


        <div id="secondary" className="widget-area" >


          <aside id="search-2" className="widget widget_search">
            <h1 className="widget-title">Vous ne trouvez pas la réponse à votre question ?</h1>
            <form role="search" method="get" className="search-form" >
              <label>
                <span className="screen-reader-text">Rechercher&nbsp;:</span>
                <input type="search" className="search-field" placeholder="Recherche…" value="" name="s" title="Rechercher&nbsp;:" />
              </label>
              <input type="submit" className="search-submit" value="Rechercher" />
            </form>
          </aside>
          <aside id="recent-posts-4" className="widget widget_recent_entries">
            <h1 className="widget-title">Articles récents</h1>
            <ul>
              <li>
                <Link to="/article/9f8fdf54-2bd9-4a2f-9ae3-ba859c71bcec">Les bienfaits du sport sur la santé</Link>
              </li>
              <li>
              <Link to="/article/:id">Des exercices pour se muscler et detendre le dos au travail</Link>
              </li>
              <li>
                <Link>Comment calculer ses besoins énergétiques ?</Link>
              </li>
              <li>
              <Link to="/article/:id">POUR PERDRE DU POIDS ? gérer mieux le pic de glycémie</Link>
              </li>
              <li>
              <Link to="/article/:id">>CROSSFIT : LES EFFETS CARDIOVASCULAIRES</Link>
              </li>
            </ul>
          </aside>

        </div>


      </div>


    )
  }
}


const mapStateToProps = state => {
  return {
      initState: state.ReducerBlog
  };
};

export default connect(mapStateToProps)(CardBlog)