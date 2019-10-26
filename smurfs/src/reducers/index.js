
 
import {FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAILURE} from '../actions'
import { nullLiteral } from '@babel/types'

const initialState = {
    smurf: null,
    isLoading: false,
    error: null

}
function getSmurfReducer(state=initialState, action){
    switch(action.type){
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true
            } 
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
            
            
    }
}