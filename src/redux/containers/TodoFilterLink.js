import {connect} from 'react-redux';
import TodoFilterLink from '../../components/TodoFilterLink';
import {updateVisibility} from '../actions/todoActions';

const mapStateToProps = state => ({
  visibility: state.todoApp.visibility,
});

export default connect(mapStateToProps, {updateVisibility})(TodoFilterLink);
