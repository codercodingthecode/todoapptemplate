// @todo: FORMAT UI WITH MATERIAL UI AND ADD ROUTES
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './todolist.css';

const ListTodos = (props) => {

    let styles = {
        sameLine: {
            display: 'inline-block'
        }
    }
    let line = classNames(
        {
            'completed': true
        }
    )
    console.log('thisis list props ', props)
    return (
        < ul >
            {
                props.todos.map((item, key) => {
                    let lineThru = item.completed ? styles.lineTrhu : '';
                    console.log('inside map -> ', item)
                    return (
                        <div key={key} >

                            <NavLink to={{
                                pathname: `/detail/${item.id}`,
                                state: { todoDetails: item }
                            }}>
                                <div style={styles.sameLine}>
                                    <li
                                        className={item.completed ? line : undefined}
                                    >{item.id} - {item.title}</li>
                                </div>
                            </NavLink>
                            <div style={styles.sameLine}>
                                <button
                                    onClick={() => props.onClickEvent({ item })}
                                    disabled={item.completed}

                                >Complete</button>
                                <button>x</button>
                            </div>
                            <br />
                            <hr />
                            <br />
                        </div>

                    )
                })
            }
        </ul >
    )
}

ListTodos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired)
}

export default ListTodos;