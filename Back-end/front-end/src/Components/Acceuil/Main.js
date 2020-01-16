import React from 'react'
import './ComponentStyle.css'
import Carousel from './Carousel'
import Capture from '../images/Capture.PNG'
import { Link } from 'react-router-dom';


class Main extends React.Component {
    render() {
        return (<main id='skew1' className='section-main'>
            <div className='Part1'>
                <div className='Part1-text'>
                <h6> <strong>UN PROGRAMME SPORT ET NUTRITION PERSONNALISÉ</strong> </h6>
                    <h2> Coach-INI est le premier <br/> service de coaching sportif et nutrition En <strong>Tunisie</strong>.</h2>
                    <Link to={`/Formulaire`} >   <button className='Part2-button' >Commencer dès maintenant</button></Link> 
                </div>
                <div className='phone'>
                    <img className='phone_img' src='https://www.stickpng.com/assets/images/5a4244f818ce7e85ae60ddef.png' />
            <img className='responsive' src={Capture} />
                </div>
            </div>

            <div className='Part2'>
                <div class="carousel">
                <Carousel/>
                </div>
                <div className='Part2-text'>
                    <h1>Des parcours d'entraînement personnalisés pour vous</h1>
                    <p>Votre Coach analyse votre forme physique et vos objectifs. Et, plus vous vous entraînez, plus il s'adapte à vous.</p>
                    <Link to={`/Formulaire`} >   <button type='button' className='Part2-button'>Choisir votre parcours</button></Link>
                </div>
            </div>


        </main>

        )
    }
}

export default Main