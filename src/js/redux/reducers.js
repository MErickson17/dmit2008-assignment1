import {getStore, updateStore} from './store'

let store;
let newStore;
let index;

function reducer (action){

    switch(action.type){
        case "delete":
            store  = getStore()
            index = action.payload.index;         
            newStore = [...store.slice(0, index), ...store.slice(index + 1)]
            updateStore(newStore)
            action.cb( )
            return "remove todo";
        case "edit":
            store  = getStore()
            index = getStore().findIndex(todo => todo.id === action.payload.id)
            newStore = [...store.slice(0,index), action.payload, ...store.slice(index +1)]
            updateStore(newStore)
            action.cb()
            return "edit todo";
        case "add":
            return "add todo";
        default: return getStore()
    }
}

export default reducer


// function reducer (action){

//     switch(action.type){
//         case "delete":
//             const store = getStore()
//             const index = action.payload.index;         
//             const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
//             updateStore(newStore)
//             action.cb( )
//             return "remove todo";
//         case "edit":
//             // const store = getStore()
//             // const index = getStore().findIndex(todo => todo.id === payload.id)
//             // const newStore = [...store.slice(0,index), store[payload], ...store.slice(index +1)]
//             // updateStore(newStore)
//             // action.cb()
//             return "edit todo";
//         case "add":
//             return "add todo";
//         default: return getStore()
//     }
// }

// export default reducer