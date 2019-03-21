import {connect} from 'react-redux';
import TodoStarIcon from '../../components/TodoStarIcon';
import {update} from '../actions/todoActions';

export default connect(null, {updateTodo: update})(TodoStarIcon);
