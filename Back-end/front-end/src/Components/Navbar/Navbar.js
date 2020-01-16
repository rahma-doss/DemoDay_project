import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux'
import { logout } from '../../actions/AuthenAction'
import logo2 from '../images/logo2.png'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    
    render() {
        return (
                this.props.auth.isAuthenticated ? <MDBNavbar className={this.props.bg ? "secondary-nav" : "nav"} dark expand="md">
                    <MDBContainer>

                        <div style={{width:'50%'}}>
                            <MDBNavbarBrand href="/" >
                                <img src={logo2} width='30%' />
                            </MDBNavbarBrand>
                        </div>

                        <div>
                            <MDBNavbarToggler onClick={this.onClick} />
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem >
                                        <MDBNavLink to="/Coachs"><strong>Coachs sportifs</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/Activités"><strong>Spécialités</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/Boutique"><strong>La boutique</strong></MDBNavLink>
                                    </MDBNavItem> <MDBNavItem>
                                        <MDBNavLink to="/Blog"><strong>Blog</strong></MDBNavLink>
                                    </MDBNavItem>
                                    {/* <MDBNavItem>
                                        <MDBNavLink to="/register"><strong>Connexion</strong></MDBNavLink>
                                    </MDBNavItem> */}
                                    
                                    <MDBNavItem>
                                        <MDBNavLink onClick={() => this.props.logout()} to="/"><strong>logout</strong></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </div>

                    </MDBContainer>
                </MDBNavbar> : <MDBNavbar className={this.props.bg ? "secondary-nav" : "nav"} dark expand="md">
                    <MDBContainer>

                        <div style={{width:'50%'}}>
                            <MDBNavbarBrand href="/" >
                                <img src={logo2} width='30%' />
                            </MDBNavbarBrand>
                        </div>

                        <div>
                            <MDBNavbarToggler onClick={this.onClick} />
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem >
                                        <MDBNavLink to="/Coachs"><strong>Coachs sportifs</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/Activités"><strong>Spécialités</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/Boutique"><strong>La boutique</strong></MDBNavLink>
                                    </MDBNavItem> <MDBNavItem>
                                        <MDBNavLink to="/Blog"><strong>Blog</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/register"><strong>Connexion</strong></MDBNavLink>
                                    </MDBNavItem>
                                    
                                    {/* <MDBNavItem>
                                        <MDBNavLink onClick={() => this.props.logout()} to="/"><strong>logout</strong></MDBNavLink>
                                    </MDBNavItem> */}
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </div>

                    </MDBContainer>
                </MDBNavbar>

           
        );
    }
}
const mapStateToProps = state => {
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logout })(Navbar);

