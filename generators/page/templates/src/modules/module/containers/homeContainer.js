/**
 * create by <%= author %>
 */

import * as Actions from '../actions/homeActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import <%= Ab %> from '../views/<%= ab %>.jsx'

function mapProps(state) {
    return {
        name: state.<%= u_name %>.name,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapProps,mapDispatchToProps)(<%= Ab %>)
