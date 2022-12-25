// todo items
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
// actions
export const completeAll = () => ({
    type: "todos/completeAll"
})
export const pendingAll = () => ({
    type: "todos/pendingAll"
})
export const removeCompleted = () => ({
    type: "todos/removeCompleted"
})

// filters
export const filterColor = (color, filter) => ({
    type: "filters/filterColor",
    payload: {
        color: color,
        filter: filter
    }
})
export const filterStatus = (status) => ({
    type: "filters/filterStatus",
    payload: status
})

//Todos
export const selectTodo = (id) => state => state.todos.entities.find(item => item.id === id)

//Options
export const selectPendings = state => state.todos.entities.filter(item=>!item.completed)
export const selectStatus = state => state.filter.status
export const selectColors = state => state.filter.filterColors

const selectFiltered = (state) => {
    const todos = state.todos.entities

    const statusAll = state.filter.status === "All"
    const statusPending = state.filter.status === "Pending"
    const statusCompleted = state.filter.status === "Completed"

    const colors = state.filter.filterColors

    return todos.filter(item => {
        if (colors.includes(item.color) || colors.length === 0) {
            if (statusAll) {
                return item
            } else if (statusCompleted) {
                return item.completed
            } else if (statusPending) {
                return !item.completed
            }
        }
    })
}

export const selectFilteredId = state => {
    return selectFiltered(state).map(({ id }) => id)
}

export const colors = ["red", "blue", "purple", "yellow", "green", "primary"]
export const status = ["All", "Pending", "Completed"]