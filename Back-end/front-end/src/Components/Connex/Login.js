import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/AuthenAction'
import {setAlert,removeAlert} from '../../actions/AlertAction'
import uuid from 'uuid'
import Navbar from '../Navbar/Navbar'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';
import './Connexion.css'
import { Link } from 'react-router-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email :'',
            password:'',

        }
    }
    handleChange=e => {
        this.setState({[e.target.name]:e.target.value})
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }
        if(nextProps.auth.error === 'Please Register Before!' || nextProps.auth.error === "Wrong Password"){
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000);
        }
    }

    loginNow = () => {
        if(this.state.email === '' || this.state.password === ''){
            let id = uuid()
            this.props.setAlert('Please enter your credentials before!', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000)
        } else {
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        }
    }

    render(){
        const smallStyle = { fontSize: '0.8rem'}
        return(
        <div>
             <Navbar bg={true}/>
            <h1>Login</h1>
            <div className='container'>
            <input name='email' type='text' onChange={this.handleChange} placeholder='Your Email '  />
            <input name='password' type='password' onChange={this.handleChange} placeholder='Your password '  />
            </div>
            <button  onClick={this.loginNow} className='btn btn-info'>Login</button>
            <MDBRow >
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3" >
            <MDBCard style={{width:'70%'}}>
              <MDBCardBody  className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                </div>
                <MDBInput name='firstname' type='text' onChange={this.handleChange} placeholder='Your firstname '/>
                <MDBInput name='lastname' type='text' onChange={this.handleChange} placeholder='Your lastname '/>
                <MDBInput name='email' type='text' onChange={this.handleChange} placeholder='Your email '/>
                <MDBInput name='password' type='password' onChange={this.handleChange} placeholder='Your password ' />
                <div className="text-center pt-3 mb-3">
                  <MDBBtn onClick={this.RegisterNow}  type="button" gradient="blue" rounded className="btn-block z-depth-1a">Sign in</MDBBtn>
                </div>
                <p className="dark-grey-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> or Sign up with:</p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="facebook-f" className="blue-text text-center" /></MDBBtn>
                  <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="twitter" className="blue-text" /></MDBBtn>
                  <MDBBtn type="button" color="white" rounded className="z-depth-1a"><MDBIcon fab icon="google-plus-g" className="blue-text" /></MDBBtn>
                </div>
              </MDBCardBody>
              
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </div>
        )

    }
}

const mapStateToProps = state => {
    return{
        auth : state.auth
    }
}

export default connect (mapStateToProps, {login, setAlert, removeAlert})(Login)