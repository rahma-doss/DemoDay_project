import { connect } from "react-redux";
import CoachCard from './CoachCard';
import SpecialiteSearch from './SpecialiteSearch';
import './stylecoach.css'
import {getCoachs, getProfils} from '../../actions/CoachAction';
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'


class CoachList extends Component {
    
    componentDidMount() {
        this.props.getCoachs()
        // this.props.getProfils()
        console.log(this.props)
    }


    render() {
        return ( 
            <div>
                <Navbar bg={true}/>
                <SpecialiteSearch />
                <div class='row'>
                    <div class='col-md-12 text-center text-warning font-weight-boldheading  '>
                        <h2 className="font-weight-bold" ><span>&Agrave; Votre Service</span> Notre &eacute;quipe</h2>
                    </div>
                </div>
                <div className="listCoachs">
                    {
                        this.props.allState  
                        .filter(
                            coach =>
                                coach.Specialite.toLocaleLowerCase().includes(this.props.SpecialiteSearched.toLocaleLowerCase().trim())
                        )
                        .map(coach => <CoachCard coach={coach} />)
                    }
                </div>

            </div> 
        );
    }
}
const mapStateToProps = state => {
    return {
        allState: state.CoachReducer,
        SpecialiteSearched: state.SpecialiteFiterReducer,
    };
};

export default connect(mapStateToProps, {getCoachs, getProfils})(CoachList);







// const CoachList =({ coachs, SpecialiteSearched }) => {
//     return (
//         <div>
//             <SpecialiteSearch />
//             <div class='row'>
//                 <div class='col-md-12 text-center text-warning font-weight-boldheading  '>
//                     <h2 className="font-weight-bold" ><span>&Agrave; Votre Service</span> Notre &eacute;quipe</h2>
//                 </div>
//             </div>
//             <div className="listCoachs">
//                 {
//                    coachs.filter(
//                         coach =>
//                             coach.Specialite.toLocaleLowerCase().includes(SpecialiteSearched.toLocaleLowerCase().trim())
//                     ).map(coach => <CoachCard coach={coach} />)
//                 }
//             </div>
//         </div>
//     );
// }
// const mapStateToProps = state => {
//     return {
//         coachs: state.CoachReducer,
//         SpecialiteSearched: state.SpecialiteFiterReducer,
//     };
// };
// export default connect(mapStateToProps, null)(CoachList);