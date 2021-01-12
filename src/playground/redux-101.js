import { createStore } from 'redux';

// Action generators - functions that returns an action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducer funcion
//1. Reducers are pure funcions > dosen´t manipulate anything out of them scope.
//2. Never change state or actions > when need, they return new objects

const countReducer = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }  
});

const unsuscribe = countReducer.subscribe(() => {
    console.log(countReducer.getState());
})
 

// Actions - an object that is sent to the store and change the states.
store.dispatch(incrementCount({ incrementBy: 5 }));

//unsuscribe()

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 107 }));