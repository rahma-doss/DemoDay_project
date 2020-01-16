import React from 'react'
import './coachblog.css';
import Blog from './Blog';
import { connect } from 'react-redux';


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
            <form role="search" method="get" className="search-form" action="http://www.coachclub.com/hp/">
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
                <a href="http://www.coachclub.com/hp/quest-ce-que-lafter-burn-effect/">Les bienfaits du sport sur la santé</a>
              </li>
              <li>
                <a href="http://www.coachclub.com/hp/vous-avez-debute-un-programme-pour-perdre-du-poids-mais-vous-stagnez/">Des exercices pour se muscler et detendre le dos au travail</a>
              </li>
              <li>
                <a href="http://www.coachclub.com/hp/comment-rependre-efficacement-votre-entrainement-sportif/">Comment calculer ses besoins énergétiques ?</a>
              </li>
              <li>
                <a href="http://www.coachclub.com/hp/le-gainage-lincontournable-pour-muscler-ses-abdominaux/">POUR PERDRE DU POIDS ? gérer mieux le pic de glycémie</a>
              </li>
              <li>
                <a href="http://www.coachclub.com/hp/tenue-de-sport-lululemon-look-sportif-canon/">CROSSFIT : LES EFFETS CARDIOVASCULAIRES</a>
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