// TODO FORM CONTAINER

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoForm from './index';
// import { getTodosAction } from '../../Redux/Actions';
import { postTodosAction } from '../../../Redux/Actions';

const mapStateToProps = (state, ownProps) => {
  // console.log('tododetails maptoprops -> ', state)
  // console.log('tododetails ownprops -> ', ownProps)
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ postTodosAction }, dispatch)
  }
}

const TodoPostContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoPostContainer;