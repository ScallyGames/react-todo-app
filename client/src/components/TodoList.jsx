import './TodoList.css';
import * as React from 'react';
import { Todo } from '../model/todo.model';
import { TodoListItem } from './TodoListItem';
import { CreateTodoListItem } from './CreateTodoListItem';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }


    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        fetch("http://localhost:3000/api/todos")
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
    }

    render() {
        return <div>
            <table cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(x => <TodoListItem key={x.id} item={x} onDeleted={this.loadData} />)}
                </tbody>
            </table>
            <CreateTodoListItem onCreated={this.loadData} />
        </div>;
    }
}
