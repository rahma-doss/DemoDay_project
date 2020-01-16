import React, { Component } from 'react';

class PersonalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstname, lastname, age, email, phonenumber ,ville , handleChange } = this.props;
        return(
            <>
                <h2>Enter your personal information:</h2>
                <label>
                    <input 
                        type="text"
                        name="firstname"
                        value={firstname}
                        placeholder="First Name"
                        onChange={handleChange('firstname')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="lastname"
                        value={lastname}
                        placeholder="Last Name"
                        onChange={handleChange('lastname')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="age"
                        value={age}
                        placeholder="age"
                        onChange={handleChange('age')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={handleChange('email')}
                    />
                </label>
                <label>
                    <input 
                        type="number"
                        name="phonenumber"
                        value={phonenumber}
                        placeholder="phonenumber"
                        onChange={handleChange('phonenumber')}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="ville"
                        value={ville}
                        placeholder="ville"
                        onChange={handleChange('ville')}
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