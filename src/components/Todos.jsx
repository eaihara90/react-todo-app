import React from 'react';

const Todos = (props) =>
{   
    const { todos } = props;
    const todosList = todos.map(todo =>
    {
        return(
            <div className="todo-item" key={ todo.id }>
                { todo.content }
            </div>
        )
    });

    return(
        <div className="todos">
            { todosList }
        </div>
    )
}

export default Todos