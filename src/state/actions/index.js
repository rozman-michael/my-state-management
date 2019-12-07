import * as todoActions from './todoActions'
import { bindActionCreators } from 'redux'

const actions = dispatch => {
  	return {
    	todoActions: bindActionCreators(todoActions, dispatch)
  	}
}

export default actions
