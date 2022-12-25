import produce from "immer";

const initState = {
    status: "All",
    filterColors: []
}

const filter = produce((state, action) => {
    switch (action.type) {
        case "filters/filterStatus":
            state.status = action.payload
            break;
        case "filters/filterColor":
            const color = action.payload.color;
            const filter = action.payload.filter;
            filter ? state.filterColors.push(color) : state.filterColors=state.filterColors.filter(item=>item!==color)           
            break;
    }
}, initState)

export default filter