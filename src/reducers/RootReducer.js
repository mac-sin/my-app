
const initState = {
    todos: [
        {id:111, userId: 777, title: 'AAAA', body: 'eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse'},
        {id:222, userId: 888, title: 'AAAA', body: 'veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis'},
        {id:333, userId: 999, title: 'AAAA', body: 'est molestiae facilis quis tempora numquam nihil qui voluptate sapiente consequatur est qui necessitatibus autem aut ipsa aperiam modi dolore numquam reprehenderit eius rem quibusdam'},
    ],
    count: 7
}

function handleDelete ( state, action ) {
    let newTodos = state.todos.filter( todo => {
        return action.id !== todo.id
    });
    return {...state, todos: newTodos}
}

function RootReducer ( state = initState , action ) {
    switch (action.type) {
        case 'DELETE_TODO':
            return handleDelete(state, action)

        case 'INCREMENT':
            return {...state, count: state.count + 1 }

        case 'DECREMENT':
            return {...state, count: state.count - 1 }
            
        default:
            return state
    }
}

export default RootReducer;
