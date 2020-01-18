
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"> Le coaching sportif, comment ça ce passe ?</h5>
              <p>Suite à un premier contact, votre entraineur personnel vous propose un RDV afin de réaliser un bilan de condition physique et de déterminer ensemble vos objectifs (retrouver la forme, maigrir, se muscler, etc.). A partir de ces informations votre coach va élaborer un programme d’entraînement adapté à vos attentes et à vos aptitudes physiques.</p>

          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/Coachs">Coachs sportifs</a>
              </li>
              <li className="list-unstyled">
                <a href="/Activités"> Spécialités</a>
              </li>
              <li className="list-unstyled">
                <a href="/Boutique">La boutique</a>
              </li>
              <li className="list-unstyled">
                <a href="/Blog">Blog</a>
              </li>
            </ul>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
      );
     
}

export default Footer;