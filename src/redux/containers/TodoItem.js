import { connect } from 'react-redux'
import TodoItem from '../../components/TodoItem'
import { update, remove } from '../actions/todoActions'

export default connect(null, { updateTodo: update, deleteTodo: remove })(TodoItem);



