import  {createStore } from "redux";

const initialState = {
    count: 0
}

function createReducer(state = initialState, action){
    switch(action.type){
        case 'Increment' :
            return { count: state.count + 1 }
        case 'Decrement' :
            return { count: state.count - 1 }
        case 'Reset' :
            return { count: 0 }
        default :
            return state
    }
}

export const store = createStore(createReducer)
