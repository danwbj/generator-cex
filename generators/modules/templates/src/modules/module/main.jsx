/**
 * create by <%= author %>
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes/spa.jsx'
import {navigate} from 'react-mini-router'

const App = React.createFactory(Routes)

import '../../style/index.less'

require('safe')(React, {
    errorHandler: function () {
        // console.log(errReport);
    }
})

ReactDOM.render(
    <Provider store={store()}>
        {App({ root:'/<%= l_name %>' })}
    </Provider>,
    document.getElementById('container')
)

if (window.location.hash == '#/') {
    navigate('/<%= l_name %>/home')
}
