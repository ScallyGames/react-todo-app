import * as React from 'react';

export class TodoListItem extends React.Component {

    delete = (id) => {
        fetch(`http://localhost:3001/api/todos/${id}`, {
            "method": "DELETE",
        })
            .then(response => {
                this.props.onDeleted();
            });
    };

    render() {
        return <tr>
            <td>{this.props.item.title}</td>
            <td>{this.props.item.description}</td>
            <td><button onClick={this.delete.bind(this, this.props.item.id)}>X</button></td>
        </tr>;
    }
}
