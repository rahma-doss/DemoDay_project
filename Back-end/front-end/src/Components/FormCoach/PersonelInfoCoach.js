import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { FirstName, LastName, Age, Email, PhoneNumber ,Ville , handleChange } = this.props;
        return(
            <>
                <h2>Enter your personal information:</h2>
                <label>
                    <input 
                        type="text"
                        name="FirstName"
                        value={FirstName}
                        placeholder="First Name"
                        onChange={handleChange('FirstName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="LastName"
                        value={LastName}
                        placeholder="Last Name"
                        onChange={handleChange('LastName')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Age"
                        value={Age}
                        placeholder="Age"
                        onChange={handleChange('Age')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Email"
                        value={Email}
                        placeholder="Email"
                        onChange={handleChange('Email')}
                    />
                </label>
                <label>
                    <input 
                        type="number"
                        name="PhoneNumber"
                        value={PhoneNumber}
                        placeholder="PhoneNumber"
                        onChange={handleChange('PhoneNumber')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Ville"
                        value={Ville}
                        placeholder="Ville"
                        onChange={handleChange('Ville')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default PersonalInfo;