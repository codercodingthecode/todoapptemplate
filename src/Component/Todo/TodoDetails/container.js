// TODOLIST CONTAINER
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoDetails from './index';
// import { getTodosAction } from '../../Redux/Actions';
import { deleteTodosAction } from '../../../Redux/Actions';

const mapStateToProps = (state, ownProps) => {
  // console.log('tododetails maptoprops -> ', state)
  // console.log('tododetails ownprops -> ', ownProps)
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ deleteTodosAction }, dispatch)
  }
}

const TodoDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(TodoDetails);

export default TodoDetailsContainer;