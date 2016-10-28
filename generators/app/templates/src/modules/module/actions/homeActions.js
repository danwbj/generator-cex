import ActionTypes from '../constants/actionTypes.js'
import request from 'superagent'

export function sayHello(name) {
    return (dispatch => {
        dispatch({
            type: ActionTypes.<%= u_name %>_SAY_HELLO,
            name: name
        })
        request.get('./')
    })
}
