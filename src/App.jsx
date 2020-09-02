import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component 
{   
    state =
    {
        todos:[
            { id: Math.floor(Math.random() * 100), content: 'Buy some milk' },
            { id: Math.floor(Math.random() * 100), content: 'Play video games' },
            { id: Math.floor(Math.random() * 100), content: 'Cooking dinner' }
        ]
    }

    addTodo = (newTodo) =>
    {
        newTodo.id = Math.floor(Math.random() * 100);
        const newTodos = [...this.state.todos, newTodo];

        this.setState({ todos: newTodos });
    }

    deleteTodo = (_id) =>
    {
        const newTodos = this.state.todos.filter(todo => todo.id !== _id);
        
        this.setState({ todos: newTodos });
    }

    render()
    {
        return (
            <div className="app">
                <h1 className="app__title">Todo's</h1>
                <AddTodo addTodo={ this.addTodo }/>
                <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
            </div>
        )
    }
}

export default App;
