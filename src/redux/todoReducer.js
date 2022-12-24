const initState = {
    entities: [
        { id: 0, title: 'title 1', completed: true, color: "red" },
        { id: 1, title: 'title 2', completed: false, color: "blue" },
        { id: 2, title: 'title 3', completed: true, color: "purple" },
        { id: 3, title: 'title 4', completed: false, color: "yellow" },
        { id: 4, title: 'title 5', completed: false, color: "green" },
        { id: 5, title: 'title 6', completed: true }
    ]
}

const todos = (state = initState, action) => {
    switch (action.type) {
        case "todos/addTodo":
            const todo = action.payload;
            return ({
                ...state,
                entities: [
                    ...state.entities,
                    todo
                ]
            })

        case "todos/toggleStatus":
            const toggledTodo = action.payload
            return {
                ...state,
                entities: state.entities.map(todo => {
                    if (todo.id === toggledTodo.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }

                    return todo
                })
            }
        case "todos/toggleColor":
            const toggledColor = action.payload
            return {
                ...state,
                entities: state.entities.map(todo => {
                    if (todo.id === toggledColor.id) {
                        return {
                            ...todo,
                            color: toggledColor.color
                        }
                    }

                    return todo
                })
            }
        case "todos/deleteItem":
            const {id} = action.payload
            return {
                ...state,
                entities: state.entities.filter(todo => todo.id !== id )
            }
        default:
            return { ...state }
    }
}

export default todos