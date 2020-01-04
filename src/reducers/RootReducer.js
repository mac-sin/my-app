
const initState = {
    todos: [
        {id:111, userId: 777, title: 'AAAA', body: 'eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse'},
        {id:222, userId: 888, title: 'AAAA', body: 'veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis'},
        {id:333, userId: 999, title: 'AAAA', body: 'est molestiae facilis quis tempora numquam nihil qui voluptate sapiente consequatur est qui necessitatibus autem aut ipsa aperiam modi dolore numquam reprehenderit eius rem quibusdam'},
    ],
}

function RootReducer ( state = initState , action ) {
    return state;
}

export default RootReducer;
