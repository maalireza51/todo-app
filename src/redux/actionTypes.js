// todos
export const addItem = (title) => ({
    type: "todos/addTodo",
    payload: {
        id: 6,
        title,
        completed: false
    }
})
export const toggleStatus = (id) => ({
    type: "todos/toggleStatus",
    payload: {
        id
    }
})
export const toggleColor = (id, color) => ({
    type: "todos/toggleColor",
    payload: {
        id,
        color
    }
})
export const deleteItem = (id) => ({
    type: "todos/deleteItem",
    payload: id
})

// filters
export const filterColor = (color) => ({
    type: "filters/filterColor",
    payload: color
})
export const filterStatus = (status) => ({
    type: "filters/filterStatus",
    payload: status
})

export const selectTodoId = state => state.todos.entities.map(({ id }) => id)