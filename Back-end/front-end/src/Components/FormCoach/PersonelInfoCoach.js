import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { FirstName, LastName, Age, Email, PhoneNumber ,Ville , handleChange } = this.props;
        return(
            <div>
            {/* <Navbar bg={true}/> */}
            
            {/* < div className='personelinfo'>
                <h2>Enter your personal information:</h2>
                <label>
                    <input 
                        type="text"
                        name="FirstName"
                        value={FirstName}
                        label="First Name"
                        onChange={handleChange('FirstName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="LastName"
                        value={LastName}
                        label="Last Name"
                        onChange={handleChange('LastName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Age"
                        value={Age}
                        label="Age"
                        onChange={handleChange('Age')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Email"
                        value={Email}
                        label="Email"
                        onChange={handleChange('Email')}
                    />
                </label>
                <label>
                    <input 
                        type="number"
                        name="PhoneNumber"
                        value={PhoneNumber}
                        label="PhoneNumber"
                        onChange={handleChange('PhoneNumber')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Ville"
                        value={Ville}
                        label="Ville"
                        onChange={handleChange('Ville')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </div> */}
            <MDBRow >
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3" >
            <MDBCard style={{width:'70%'}}>
              <MDBCardBody  className="mx-4" style={{marginTop:'-165%'}}>
                <div className="text-center" style={{color:'white'}}>
                  <h3 className="dark-grey-text mb-5" style={{color:'white'}}><strong style={{color:'white'}}>S'inscrire</strong></h3>
                </div>
                <MDBInput type="text"   name="FirstName"  value={FirstName} label="First Name" onChange={handleChange('FirstName')} />
                <MDBInput  type="text"
                        name="LastName"
                        value={LastName}
                        label="Last Name"
                        onChange={handleChange('LastName')} style={{color:'white'}} />
                <MDBInput type="text"
                        name="Age"
                        value={Age}
                        label="Age"
                        onChange={handleChange('Age')} style={{color:'white'}} />
                <MDBInput   type="text"
                        name="Email"
                        value={Email}
                        label="Email"
                        onChange={handleChange('Email')} style={{color:'white'}}/>
                <MDBInput  type="number"
                        name="PhoneNumber"
                        value={PhoneNumber}
                        label="PhoneNumber"
                        onChange={handleChange('PhoneNumber')} style={{color:'white'}} />

                        <MDBInput  type="text"
                        name="Ville"
                        value={Ville}
                        label="Ville"
                        onChange={handleChange('Ville')} style={{color:'white'}}/>
                <div className="text-center pt-3 mb-3">
                  <MDBBtn className="Next" onClick={this.continue}>
                    Next »</MDBBtn>
                </div>
              </MDBCardBody>
              
            </MDBCard>
          </MDBCol>
        </MDBRow>
            </div>
        );
    }
}

export default PersonalInfo;