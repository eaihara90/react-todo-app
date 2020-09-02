import React, { Component } from 'react';

class AddTodo extends Component
{
    state =
    {
        content: ''
    }

    handleChange = (e) =>
    {
        this.setState
        ({
            content: e.target.value
        })
    }
    
    handleSubmit = (e) =>
    {
        e.preventDefault();

        this.props.addTodo(this.state);

        this.setState
        ({
            content: ''
        })
    }

    render()
    {
        return (
            <div className="add-todo">
                <form 
                    action=""
                    className="add-todo__form"
                    onSubmit={ this.handleSubmit }>

                    <label 
                        htmlFor="" 
                        className="add-todo__label">
                        New todo
                    </label>

                    <input
                        type="text" 
                        className="add-todo__input" 
                        onChange={ this.handleChange }
                        value={ this.state.content }
                    />
                    
                    <button className="add-todo__btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo