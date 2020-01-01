import React , { Component, useState } from 'react';
import axios from 'axios';
import NewTodoForm from './NewTodoForm';
import {Row, Col, Card, Button, Typography } from 'antd';
const { Title } = Typography;

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    deleteHandler (id) {
        const postList = this.state.posts.filter( post => post.id !== id )
        this.setState({ posts: postList })
    }

    addHandler (post) {
        post.id = Math.random()
        this.setState( [...this.state.posts, post] )
    }
    
    getPosts () {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // console.log(res.data)
                return res.data.slice(0,10)
            })
    }

    async componentDidMount(){
        const posts = await this.getPosts()
        this.setState({ posts: posts })
        console.log(this.state.posts)
    }

    render() { 
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <Card title={post.title} key={post.id} bordered={false} style={{margin: "10px 0px"}}>
                         <p>{post.body}</p>
                         <Button block type="danger" icon="close" onClick={()=> this.deleteHandler(post.id)}>
                             Delete
                         </Button>
                     </Card>
                )
            })
        ) : (
            <div> No Posts Yet</div>
        )
        return ( 
            <div className="container">
                {postList}
            </div>
        );
    }
}
 
// const Todos = (props) => {
//     console.log(props)
//     // set React Hook
//     const [todos, setTodos] = useState([
//         {id: 1, description: "aaaaaa", reporter: "John" },
//         {id: 2, description: "bbbbbb", reporter: "Ming" },
//         {id: 3, description: "cccccc", reporter: "Ken" },
//         {id: 4, description: "dddddd", reporter: "Wing" },
//     ]);

//     const deleteHandler = (id) => {
//         setTodos( todos.filter( todo => todo.id !== id ) )
//     }
//     const addHandler = (newTodo) => {
//         newTodo.id = Math.random()
//         setTodos( [...todos, newTodo] )
//     }

//     const todoList = todos.length ? (
//         todos.map( todo => {
//             return (
//                 <Col span={8} key={todo.id}>
//                     <Card title={todo.reporter} bordered={false} style={{margin: "10px 0px",}}>
//                         <p>{todo.description}</p>
//                         <p>{todo.reporter}</p>
//                         <Button block type="danger" icon="close" onClick={()=> deleteHandler(todo.id)}>
//                             Delete
//                         </Button>
//                     </Card>
//                 </Col>
//             )
//         })
//     ) : (
//         <Col span={24}>
//             <Title level={3}>You have No Todo's left.</Title>
//         </Col>
//     )
    

//     return (
//         <div className="container">
//             <Title>Todo list</Title>
//             <Row gutter={16}>
//                 { todoList }
//             </Row>
//             <div className="divider"></div>
//             <NewTodoForm addHandler={addHandler}/>
//         </div>
//     );
// }

export default Todos;