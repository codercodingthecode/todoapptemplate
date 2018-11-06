import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from './index';
import { getTodosAction, putTodosAction, postTodosAction } from '../../Redux/Actions';

const mapStateToProps = (state, ownPRops) => {
    // console.log('main container mapstatetoprops -> ', state)
    return {
        todos: state.getTodos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getTodosAction,
            putTodosAction,
            postTodosAction,
        }, dispatch)
    }
}

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo);