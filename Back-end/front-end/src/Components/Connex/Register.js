import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { setAlert, removeAlert } from '../../actions/AlertAction'
import { register, ClearError } from '../../actions/AuthenAction'
import Navbar from '../Navbar/Navbar'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';
import './Connexion.css'
import { Link } from 'react-router-dom';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            // date: '',

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    RegisterNow = () => {
        if (this.state.firstname === '' || this.state.lastname === '' || this.state.email === '') {
            let id = uuid()
            this.props.setAlert('All fields are required', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        } else {
            this.props.register(this.state)
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.auth.error === 'User already exists!!') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.ClearError()
            }, 5000);
        }
    }

    render() {
        const smallStyle = { fontSize: '0.8rem'}
        return (
            <div className='register'>
                <Navbar bg={true} />
                {/* <h1>Register</h1>
                <div className='container formRegister'>
                    <input  />
                    <input  />
                    <input  />
                    <input />
                    {/* <input name='date' type='text' onChange={this.handleChange} label='Your date ' /> */}
                {/* </div>
                <button className='btn btn-info'>Register</button>  */}
                <MDBRow >
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3" >
            <MDBCard style={{width:'70%'}}>
              <MDBCardBody  className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                </div>
                <MDBInput  label='Your name'  name='firstname' type='text' onChange={this.handleChange} />
                <MDBInput name='lastname' type='text' onChange={this.handleChange} label='Your lastname '/>
                <MDBInput name='email' type='text' onChange={this.handleChange} label='Your email '/>
                <MDBInput name='password' type='password' onChange={this.handleChange} label='Your password ' />
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
              <MDBModalFooter className="mx-5 pt-3 mb-1">
              <Link to={`/login`} ><p className="grey-text d-flex justify-content-end" style={smallStyle}>Already a member?  <p  className="blue-text ml-1"> Sign In</p></p></Link>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
            </div>
        )
    }
}

// const mapdispatchToprops =dispatch=>{
//     return {
//         setAlert : (msg, type,id) => dispatch(setAlert(msg, type,id)),
//          clearAlert: id => dispatch(removeAlert(id))
//     }
// }

const mapStateToProps = state => {
    return {
        auth: state.auth

    }
}

export default connect(mapStateToProps, { setAlert, removeAlert, register, ClearError })(Register)