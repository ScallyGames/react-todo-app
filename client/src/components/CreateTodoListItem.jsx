import * as React from 'react';
import { NewTodo } from '../model/new-todo.model'

export class CreateTodoListItem extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            title: "",
            description: "",
        }
    }

    create = (event) => {
        fetch(`http://localhost:3001/api/todos`, {
            'method': 'POST',
            'body': JSON.stringify(new NewTodo(this.state.title, this.state.description)),
            'headers': {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                this.props.onCreated();
            });

        event.preventDefault();
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    
        });
    }

    render() {
        return <form onSubmit={this.create}>
            <label>
                Title:
                <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
            </label>
            <label> 
                Description:
                <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
            </label>
            <button type="submit">Create</button>
        </form>;
    }
}
