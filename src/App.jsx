import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component 
{   
    state =
    {
        todos:[
            { id: 1, content: 'Buy some milk' },
            { id: 2, content: 'Play video games' }
        ]
    }

    render()
    {
        return (
            <div className="app">
                <h1 className="app__title">Todo's</h1>
                <Todos todos={ this.state.todos }/>
            </div>
        )
    }
}

export default App;
