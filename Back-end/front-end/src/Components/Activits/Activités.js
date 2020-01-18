import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Activites.css'


// import { connect } from 'react-redux';



class Activités extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={{marginLeft:'9%'}}>
                <h1 className='title_spec' style={{textAlign:'center'}}>  <strong> VOTRE OBJECTIF. <br/> VOTRE PARCOURS <br/> D'ENTRAÎNEMENT.</strong></h1>
                <div class="container centerElements"   >
                    <Carousel className="miniImages">
                        <div>
                            <img src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt5447e7b46839ff81/5de0b8057fff4c7c41858865/FLO_BODYCUES_HEAD.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496" />
                            <p className="legend font-weight-bold">Yoga</p>
                        </div>
                        <div>
                            <img src=" https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt840754841e1937d1/5dfcb4ea028cba3ef4ec619a/Q1_WONDERBOY_LAUNCH_HEAD.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496" />
                            <p className="legend font-weight-bold">Boxing</p>
                        </div>

                        <div>
                            <img src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt3c19db5519c8b8c8/5de0b81694fdd576fb3737e9/HIIT_appetite_header.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496" />
                            <p className="legend font-weight-bold">Fitness</p>
                        </div>
                        <div>
                            <img src="http://www.jaevi.fr/wp-content/uploads/2018/08/demo-class-banner.jpg" />
                            <h1 className="legend  font-weight-bold"> Zumba</h1>
                        </div>

                        <div>
                            <img src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltb0fc425dfc160f4f/5de0b8071973b50217e81177/building_to_a_strict_pullup_header.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496" />
                            <p className="legend font-weight-bold">Crossfit</p>
                        </div>
                        <div>
                            <img src="https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt39863d4a751219c8/5de0b83b94fdd576fb373815/Hypertrophy_Header_CUT.JPG?format=pjpg&auto=webp&fit=crop&quality=76&width=1232&height=496" />
                            <p className="legend font-weight-bold" style={{color:'white'}}>Musculation</p>
                        </div>
                        <div>
                            <img src="https://nerds.co/wp-content/uploads/2015/01/La-natation-660x330.jpg" />
                            <p className="legend font-weight-bold"  style={{color:'white'}}>Natation</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         ActiviteCoach: state.ActivitesReducer,
//     }
// }


export default Activités;