import React from "react";
import PropTypes from "prop-types";

const TodoDetails = (props) => {
    console.log('poooooops -> ', props)
    const { id, title, description } = props.location.state.todoDetails;
    return (
        <div>
            <h1>todo details </h1>
            <button onClick={() => props.history.goBack()}> {`<`} BACK </button>
            <form>
                <div>

                    <label htmlFor="title">Todo</label>
                    <input type="text" name="title" value={title} />
                    <button>complete</button>
                </div>
                <div>
                </div>

                <label htmlFor="description">Description</label>
                <textarea rows={5} cols={40} type="text" name="description" value={description} />

            </form>
            <div>
                <button onClick={() => { }}>save</button>
                <button>cancel</button>
                <button onClick={() => {
                    props.actions.deleteTodosAction(id)
                    props.history.goBack()
                }

                } >delete</button>
            </div>
            <hr />
        </div>

    )
}

export default TodoDetails;