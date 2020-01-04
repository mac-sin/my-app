import { createStore } from 'redux';

const initState = {
    todos: [],
    posts: []
}

function myreducer ( state = initState , action ) {
    console.log(action, state);
}

const Store = createStore(myreducer);

export default Store;

// const todoAction = { try: 'ADD_TODO', todo: 'buy milk' }

// store.dispatch(todoAction);

