import React, { Component } from 'react';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { firstname, lastname, age, email, phonenumber,ville,Specialite,presentation,image , video , tarifs ,id  } = this.props;
        return(
            <>
                <h2> Profil Coach </h2>
                First Name: <b>{firstname}</b><br />
                Last Name: <b>{lastname}</b><br />
                age: <b>{age}</b> <br/>
                email: <b>{email}</b> <br/>
                phonenumber: <b>{phonenumber}</b> <br/>
                ville: <b>{ville}</b><br />
                Specialite: <b>{Specialite}</b><br />
                presentation: <b>{presentation}</b><br />
                image: <b>{image}</b><br />
                video: <b>{video}</b><br />
                tarifs: <b>{tarifs}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
            </>
        );
    }
}

export default AllInfo;