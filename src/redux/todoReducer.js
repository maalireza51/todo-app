import produce from "immer";

const initState = {
    entities: [
        { id: 0, title: 'title 1', completed: true, color: "red" },
        { id: 1, title: 'title 2', completed: false, color: "blue" },
        { id: 2, title: 'title 3', completed: true, color: "purple" },
        { id: 3, title: 'title 4', completed: false, color: "yellow" },
        { id: 4, title: 'title 5', completed: false, color: "green" },
        { id: 5, title: 'title 6', completed: true , color:"primary"}
    ]
}

//Using Reducer By immer
const todos = produce((state, action) => {
    switch (action.type) {
        case "todos/addTodo":
            const todo = action.payload;
            state.entities.push(todo)
            break;
        case "todos/toggleStatus":
            const toggledTodo = action.payload
            state.entities.find(item => item.id === toggledTodo.id).completed = !state.entities.find(item => item.id === toggledTodo.id).completed
            break;
        case "todos/toggleColor":
            const toggledColor = action.payload
            state.entities.find(item => item.id === toggledColor.id).color = toggledColor.color
            break;
        case "todos/deleteItem":
            const id = action.payload
            state.entities = state.entities.filter(item=>item.id!==id)
            break;
        case "todos/completeAll":
            state.entities = state.entities.map(item=>({...item,completed:true}))
            break;
        case "todos/pendingAll":
            state.entities = state.entities.map(item=>({...item,completed:false}))
            break;
        case "todos/removeCompleted":
            state.entities = state.entities.filter(item=>!item.completed)
            break;
    }
}, initState)

export default todos