import React, { Component } from 'react';
import PersonelInfoCoach from './PersonelInfoCoach';
import CoachDetails from './CoachDetails';
import AllInfo from './AllInfo';
import './Form.css';



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
                <h2> step {step} of 3 </h2>
                {this.showstep()}
            </div>
        );
    }
}

export default StepForm;