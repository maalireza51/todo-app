const initState = {
    status: "all",
    filterColors: [
        {color:"red",status:true},
        {color:"blue",status:true},
        {color:"purple",status:true},
        {color:"yellow",status:true},
        {color:"green",status:true},
        {color:"primary",status:true}
    ]
}

const filter = (state = initState, action) => {
    switch (action.type) {
        case "filters/filterStatus":
            return {
                ...state,
                status: action.payload
            }
        case "filters/filterColor":
            const color = action.payload;
            return {
                ...state,
                filterColors: state.filterColors.map((item,index) => {
                    if (item.color === color) {
                        return {
                            ...item,
                            status: !item.status
                        }
                    }

                    return item
                })
            }
        default:
            return state
    }
}

export default filter