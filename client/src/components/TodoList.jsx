import './TodoList.css';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Todo } from '../model/todo.model';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import { CreateTodoListItem } from './CreateTodoListItem';

export class TodoList extends React.Component {

    columns = [
        { field: 'title', headerName: 'Title' },
        { field: 'description', headerName: 'Description' },
        {
            field: "",
            headerName: "",
            sortable: false,
            width: 80,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div>
                        <Button type="submit" variant="contained"
                          onClick={this.delete.bind(this, params.id)}
                        >
                            <DeleteForeverIcon />
                        </Button>
                    </div>
                );
            }
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }


    componentDidMount() {
        this.loadData();
    }

    delete = (id) => {
        fetch(`http://localhost:3001/api/todos/${id}`, {
            "method": "DELETE",
        })
            .then(response => {
                this.loadData();
            });
    };

    loadData = () => {
        fetch("http://localhost:3001/api/todos")
            .then(res => res.json())
            .then(result => result.map(x => new Todo(x.id, x.title, x.description, x.done)))
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        todos: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    };

    render() {
        return <div className="todo-list">
            <CreateTodoListItem onCreated={this.loadData} />
            <DataGrid rows={this.state.todos} columns={this.columns} pageSize={10} disableSelectionOnClick={true} isCellEditable={false} isRowSelectable={false}>
            </DataGrid>
        </div>;
    }
}
