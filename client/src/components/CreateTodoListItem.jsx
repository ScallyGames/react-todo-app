import './CreateTodoListItem.css'
import * as React from 'react';
import { NewTodo } from '../model/new-todo.model'
import { Button, Box, TextField } from '@mui/material'

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
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        fetch(`http://localhost:3001/api/todos`, {
            'method': 'POST',
            'body': JSON.stringify(new NewTodo(data.get('title'), data.get('description'))),
            'headers': {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                this.props.onCreated();
                event.target.reset();
            });
    };

    render() {
        return <Box component="form" onSubmit={this.create} noValidate>
            <div><TextField required id="title" label="Title" name="title" /></div>
            <div><TextField required id="description" label="Description" name="description" /></div>
            <div><Button type="submit" variant="contained">Create</Button></div>
        </Box>;
    }
}
