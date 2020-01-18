import React from 'react';
import { connect } from 'react-redux';
import { specialiteFilter } from '../../actions/SpecialiteAction';
import './Coachs.css'

const SpecialiteSearch = ({ value, onChangeText }) => {
    return (
        <nav className="navbar_search"  >
            <form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control" className="name-filter-text"
                    type="text" placeholder="Search..."
                    onChange={event => onChangeText(event.target.value)}  style={{ width: '50%' }}/>
                <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit"><i className="fa fa-search"></i></button>
            </form>


        </nav>
    );
}
const mapStateToProp = (state) => {
    return {
        value: state.SpecialiteFiterReducer
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onChangeText: (newText) => dispatch(specialiteFilter(newText)),


    }

}



export default connect(mapStateToProp, mapDispatchToProps)(SpecialiteSearch);