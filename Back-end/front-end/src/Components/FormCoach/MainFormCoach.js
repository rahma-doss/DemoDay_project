import React, { Component } from 'react';
import PersonelInfoCoach from './PersonelInfoCoach';
import CoachDetails from './CoachDetails';
import AllInfo from './AllInfo';
import './Form.css';
import Navbar from '../Navbar/Navbar'
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';



class StepForm extends Component {
    state = {
        step: 1,

        //step1
        FirstName: '',
        LastName: '',
        Age: '',
        Email: '',
        PhoneNumber: '',
        Ville: '',
        //step2
        Specialite: '',
        presentation: '',
        Image: '',
        Video: '',
        Tarifs: '',
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    showstep = () => {
        const { step, FirstName, LastName, Age, Email, PhoneNumber, Ville, Specialite, presentation, Image, Video, Tarifs, id } = this.state;
        if (step === 1)
            return (<PersonelInfoCoach
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                FirstName={FirstName}
                Age={Age}
                Email={Email}
                PhoneNumber={PhoneNumber}
                Ville={Ville}
            />);


        if (step === 2)
            return (<CoachDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                Specialite={Specialite}
                presentation={presentation}
                Image={Image}
                Video={Video}
                Tarifs={Tarifs}
                id={id}
            />);
        if (step === 3)
            return (<AllInfo
                FirstName={FirstName}
                LastName={LastName}
                Age={Age}
                Email={Email}
                PhoneNumber={PhoneNumber}
                Ville={Ville}
                Specialite={Specialite}
                presentation={presentation}
                Image={Image}
                Video={Video}
                Tarifs={Tarifs}
                id={id}
                prevStep={this.prevStep}
            />);
    }
    render() {
        const { step } = this.state;
        return (
            <div>
            <Navbar bg={true}/>
            <div>
                <img id="300683558982" className="w-full absolute pin-t pin-l vertical-center lazyautosizes lazyloaded" src="//cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_300x300.jpg?v=1578912033" data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 2048, 3072, 4096]" data-aspectratio="2.053475935828877" data-sizes="auto" alt="" data-srcset="//cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_540x.jpg?v=1578912033 540w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_720x.jpg?v=1578912033 720w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_900x.jpg?v=1578912033 900w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1080x.jpg?v=1578912033 1080w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1296x.jpg?v=1578912033 1296w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1512x.jpg?v=1578912033 1512w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1728x.jpg?v=1578912033 1728w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_2048x.jpg?v=1578912033 2048w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_3072x.jpg?v=1578912033 3072w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_4096x.jpg?v=1578912033 4096w" sizes="1349px" srcset="//cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_540x.jpg?v=1578912033 540w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_720x.jpg?v=1578912033 720w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_900x.jpg?v=1578912033 900w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1080x.jpg?v=1578912033 1080w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1296x.jpg?v=1578912033 1296w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1512x.jpg?v=1578912033 1512w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_1728x.jpg?v=1578912033 1728w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_2048x.jpg?v=1578912033 2048w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_3072x.jpg?v=1578912033 3072w, //cdn.shopify.com/s/files/1/0849/5778/files/Lookbook_cover_4096x.jpg?v=1578912033 4096w"></img>

                </div>            <div className='personelinfo'>
                <h2> step {step} of 3 </h2>
                {this.showstep()}
            </div> 
            {/* <MDBRow >
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3" >
            <MDBCard style={{width:'70%'}}>
              <MDBCardBody  className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                </div>
                <MDBInput name='email' type='text' onChange={this.handleChange} label='Your email '/>
                <MDBInput name='password' type='password' onChange={this.handleChange} label='Your password ' />
                <MDBInput name='password' type='password' onChange={this.handleChange} label='Your password ' />
                <MDBInput name='password' type='password' onChange={this.handleChange} label='Your password ' />
                <MDBInput name='password' type='password' onChange={this.handleChange} label='Your password ' />
                <div className="text-center pt-3 mb-3">
                  <MDBBtn onClick={this.loginNow}  type="button" gradient="blue" rounded className="btn-block z-depth-1a">Sign in</MDBBtn>
                </div>
              </MDBCardBody>
              
            </MDBCard>
          </MDBCol>
        </MDBRow> */}
             </div>
        );
    }
}

export default StepForm;