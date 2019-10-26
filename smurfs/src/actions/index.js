import axios from 'axios'

export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"

export const fetchSmurf = () => {
    return(dispatch) => {
        dispatch({type: FETCH_SMURF_START})
        axios
        .get("https://localhost:3333")
        .then(response => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data)
        })
        .catch(error => dispatch({type: FETCH_SMURF_FAILURE, payload: response.data}))
    }
}

export const postSmurf = (state, action) => {
    return(dispatch)=> {
        axios.post('https://localhost:3333',)
    }
}
