/* eslint-disable indent */

/**
 * create by <%= author %>
 */

import ActionTypes from '../constants/actionTypes.js'

import merge from 'lodash/merge'

const initialState = {
    name: '',
}

export default function <%= u_name %>(state = initialState, action = null) {
    switch (action.type) {
        case ActionTypes.<%= u_name %>_SAY_HELLO:
            return merge({}, state, action)
        default:
            return state
    }
}
