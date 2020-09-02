import React from 'react';

const Todos = (props) =>
{   
    const { todos, deleteTodo } = props;
    
    let todosList = null;

    if (todos.length)
    {
        todosList = todos.map(todo =>
        {
            return(
                <div 
                    className="todo-item" 
                    key={ todo.id }
                    onClick={ () => deleteTodo(todo.id) }>
                    { todo.content }
                </div>
            )
        })
    }
    else
    {
        todosList = <p className="todo-item">You've completed all of your todos, yay!</p>   
    }

    return(
        <div className="todos">
            { todosList }
        </div>
    )
}

export default Todos