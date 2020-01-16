import React, { Component } from 'react';


class Coachdetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { Specialite, presentation, Image, Video , Tarifs , handleChange } = this.props;
        return(
            <>
                <h2>Enter your  information:</h2>
                <label>
                    <input 
                        type="text"
                        name="Specialite"
                        value={Specialite}
                        onChange={handleChange('Specialite')}
                        placeholder="Specialite"
                    />
                </label>
                <label>
                    <textarea 
                        type="text"
                        name="presentation"
                        value={presentation}
                        onChange={handleChange('presentation')}
                        placeholder="presentation"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Image"
                        value={Image}
                        onChange={handleChange('Image')}
                        placeholder="Image"
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        name="Video"
                        value={Video}
                        onChange={handleChange('Video')}
                        placeholder="Video"
                    />
                </label>
                <label>
                    <input 
                        type="Tarifs"
                        name="Tarifs"
                        value={Tarifs}
                        onChange={handleChange('Tarifs')}
                        placeholder="Tarifs"
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        );
    }
}

export default Coachdetail;