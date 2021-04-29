import { ADD_TODO, UPDATE_TODO, DELETE_TODO, GET_TODO, updateTodo } from './actions';

const initialData = {
    results: []
}


export let reducer = (state = initialData, action) => {
    let todos;
    switch (action.type) {
        case GET_TODO:            
            return {...state, results: action.payload}
        case ADD_TODO:
            // console.log(state)
            // console.log(action)
            todos = [...state.results]; 
            let id = todos[todos.length-1].id
            id++
            let obj = {
                id: id,
                name: action.payload.name,
                species: action.payload.species,
                status: action.payload.status
            }           
            todos.push(obj);
            return {...state, results: todos};
        case DELETE_TODO:
            todos = [...state.results];
            todos = todos.filter(todo => todo.id !== action.payload);
            return {...state, results: todos};
        case UPDATE_TODO:
            console.log(state)
            console.log(action)
            todos = [...state.results];
            let idx = todos.findIndex(el=>el.id===parseInt(action.payload.id))
            let objUpdate = {
                id: parseInt(action.payload.id),
                name: action.payload.name,
                species: action.payload.species,
                status: action.payload.status
            }
            todos[idx] = objUpdate
            return {...state, results: todos};
        default:
            return state

    }
}