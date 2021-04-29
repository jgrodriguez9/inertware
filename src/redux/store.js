import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import thunk from 'redux-thunk';


const storeFn = () =>{
    return{
        ...createStore(reducer, applyMiddleware(thunk))
    }
}
export default storeFn