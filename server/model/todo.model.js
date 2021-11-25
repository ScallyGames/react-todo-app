class Todo
{
    id;
    title;
    description;
    done;

    constructor(id, title, description, done = false)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
    }
}

module.exports = Todo;