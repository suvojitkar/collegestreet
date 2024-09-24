const cartReducer = (state: any, action: any) => {
    if(action.type === "ADD") {
        const isDataInStore = state.filter((data:any) => data.id === action.payload.id).length > 0;
        if(isDataInStore) {
            state = state.map((data: any) => {
                if(data.id === action.payload.id) {
                    return {...data, qty: data?.qty + 1 || 0}
                } else {
                    return {...data};
                }
            })
        } else {
            const newData = {...action.payload, qty: 1}
            state = [...state, newData]
        }
    } else if (action.type === "DEL") {
        const isDataInStore = state.filter((data:any) => data.id === action.payload.id).length > 0;
        if(isDataInStore) {
            state = state.map((data: any) => {
                if(data.id === action.payload.id) {
                    return {...data, qty: data?.qty - 1 || 0}
                } else {
                    return {...data};
                }
            })
        } else {
            state = [...state, action.payload]
        }
    } else {
        state = [...state];
    }
    return state;
}

export default cartReducer;