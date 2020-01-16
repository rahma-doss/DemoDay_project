import React, { Component } from 'react';
import PersonelInfoCoach from './PersonelInfoCoach';
import CoachDetails from './CoachDetails';
import AllInfo from './AllInfo';
import './Form.css';



class StepForm extends Component {
    state = {
        step: 1,

        //step1
        firstname: '',
        lastname: '',
        age: '',
        email: '',
        phonenumber: '',
        ville: '',
        //step2
        Specialite: '',
        presentation: '',
        image: '',
        video: '',
        tarifs: '',
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
        const { step, firstname, lastname, age, email, phonenumber, ville, Specialite, presentation, image, video, tarifs, id } = this.state;
        if (step === 1)
            return (<PersonelInfoCoach
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                firstname={firstname}
                age={age}
                email={email}
                phonenumber={phonenumber}
                ville={ville}
            />);


        if (step === 2)
            return (<CoachDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                Specialite={Specialite}
                presentation={presentation}
                image={image}
                video={video}
                tarifs={tarifs}
                id={id}
            />);
        if (step === 3)
            return (<AllInfo
                firstname={firstname}
                lastname={lastname}
                age={age}
                email={email}
                phonenumber={phonenumber}
                ville={ville}
                Specialite={Specialite}
                presentation={presentation}
                image={image}
                video={video}
                tarifs={tarifs}
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