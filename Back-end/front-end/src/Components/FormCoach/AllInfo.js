import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addProfil} from "../../actions/CoachAction"
import Navbar from '../Navbar/Navbar'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';


class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { FirstName, LastName, Age, Email, PhoneNumber, Specialite, presentation, Ville, Image, Video, Tarifs } = this.props;
        return( 
            <div>
            {/* <Navbar bg={true}/> */}
            < div className='personelinfo'>
              
                <h2> Profil Coach </h2>
                First Name: <b>{FirstName}</b><br />
                Last Name: <b>{LastName}</b><br />
                age: <b>{Age}</b> <br/>
                email: <b>{Email}</b> <br/>
                phonenumber: <b>{PhoneNumber}</b> <br/>
                ville: <b>{Ville}</b><br />
                Specialite: <b>{Specialite}</b><br />
                presentation: <b>{presentation}</b><br />
                image: <b>{Image}</b><br />
                video: <b>{Video}</b><br />
                tarifs: <b>{Tarifs}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={() => this.props.addProfil({ FirstName, LastName, Age, Email, PhoneNumber, Specialite, presentation, Ville, Image, Video, Tarifs })}>
                    Add
                </button>
            </div>
            
            </div>
        );
    }
}

export default connect(null, {addProfil})(AllInfo);