// @todo: ADD ROUTES AND MATERIA-UI
import React, { Component } from 'react';
import { ListTodos, TodoForm } from '../index';
import { Route } from "react-router-dom";

export default class Todo extends Component {

    componentDidMount() {
        this.props.actions.getTodosAction();
    }

    onClickEvent = event => {
        this.props.actions.putTodosAction(event.item.id);
    }

    handleAddTodo = event => {
        console.log('handle post todo -> ', event)
        this.props.actions.postTodosAction(event);
    }

    render() {
        const { todos = [] } = this.props;
        console.log('props avail main', this.props)
        return (
            <div>
                <h1>Todo App</h1>
                <TodoForm handleAddTodo={this.handleAddTodo} />
                <ListTodos todos={todos} onClickEvent={this.onClickEvent} />
            </div>
        )
    }
}
