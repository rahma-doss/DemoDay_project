import React from 'react'
import './Formulaire.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';


class Step3 extends React.Component {
    render() {
        return (
            <div className='Step3'>

                <Navbar bg={true} />

                <div className="card" style={{ backgroundColor: '  #000000c7' }}>


                    <h2 className="header"> <strong>  Donnez quelques dernières informations à votre Coach</strong></h2>
                    <p className="header_p">
                        <span>Vous y êtes presque. Ces informations permettent à votre Coach de mieux comprendre vos besoins.</span>
                    </p>

                    <div className="card-body">


                        <div>
                            <label for="bday">Veuillez saisir votre date de naissance :</label>
                            <input type="date" id="bday" name="bday" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
                        </div>

                        <div className="validation_height">
                            <label for="height" > <strong> Taille</strong> </label>

                            <input type="number" id="height" pattern="[0-9]+(\.[0-9]*)?" required="" min="130" max="250" name="height"></input>
                            <select name="heightUnit" tabindex="-1">
                                <option value="cm"> cm</option>
                            </select>
                        </div>

                        <div className="validation_height">
                            <label for="weight"> <strong> Poids</strong> </label>
                            <input c id="weight" type="number" required="" min="40" max="150" name="weight" />
                            <select name="weightUnit" tabindex="-1">
                                <option value="kg"> kg</option>
                            </select>
                        </div>
                        <Link to={'/register'}><button className='validation_button'>Valider</button></Link>



                    </div>

                </div >
            </div >

        )
    }

}

export default Step3