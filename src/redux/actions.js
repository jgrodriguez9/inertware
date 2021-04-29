export const GET_TODO = "GET_TODO";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}


export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}

export function getTodo(todo){
    return{
        type: GET_TODO,
        payload: todo
    }
}

//function que busca rickandmorty
export const fetchRickAndMorty = (payload) => {
    return dispatch =>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(response=>response.json())
        .then(result=>dispatch(getTodo(result.results)))
    }
}
