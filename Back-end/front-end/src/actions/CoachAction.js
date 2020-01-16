import { GET_COACHS } from './types';
import axios from 'axios';

export const getCoachs = () => dispatch => {
    axios.get("/api/Coachs")
        .then(res => res.data)
        .then(coach => dispatch({
            type: GET_COACHS,
            payload: coach
        })
        )
}
export const getProfils = () => dispatch => {
    axios.get("/api/profil/all")
        .then(res => res.data)
        .then(coach => dispatch({
            type: GET_COACHS,
            payload: coach
        })
        )
}

export const addProfil = newProfil => dispatch => {
    axios.post('/api/profil', newProfil)
        .then(res => dispatch({
            type: "ADD_PROFIL",
            payload: res.data
        }))
        .catch(err => {
            console.error(err.message)
        })
}