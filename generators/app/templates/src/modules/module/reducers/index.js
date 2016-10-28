/**
 * create by <%= author %>
 */

import { combineReducers } from 'redux'

import <%= u_name %> from './<%= l_name %>.js'

export default function createReducer(asyncReducers) {
    return combineReducers({
        <%= u_name %>,
        ...asyncReducers
    })
}
