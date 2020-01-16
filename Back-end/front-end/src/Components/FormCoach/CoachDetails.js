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
        const { Specialite, presentation, image, video , tarifs , handleChange } = this.props;
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
                        type="image"
                        src="fichier.png" 
                        name="clicImage"
                        value={image}
                        onChange={handleChange('image')}
                        placeholder="image"
                    />
                </label>
                <label>
                    <video 
                        type="video"
                        name="video"
                        value={video}
                        onChange={handleChange('video')}
                        placeholder="video"
                    />
                </label>
                <label>
                    <input 
                        type="tarifs"
                        name="tarifs"
                        value={tarifs}
                        onChange={handleChange('tarifs')}
                        placeholder="tarifs"
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