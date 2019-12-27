import { connect } from 'react-redux';
import { setAuth } from '../store/actions';
import Callback from './callback';
import { bindActionCreators } from '../../node_modules/redux';

const dispatchActionToProps = dispatch => {
  return bindActionCreators({
    setAuth,
  }, dispatch);
}

export default connect(null, dispatchActionToProps)(Callback);