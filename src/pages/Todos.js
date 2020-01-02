import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import NewTodoForm from './NewTodoForm';
import NewPostForm from './NewPostForm';
import IconImage from '../assets/icon.png';
import { Card, Button, Typography, Alert } from 'antd';
const { Title } = Typography;

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasLocals: false,
            localLength: 0,
            iconLoading: false,
            alertVisible: false,
            alertMessage: 'alert message.',
        }
    }

    deleteHandler = (id) => {
        const postList = this.state.posts.filter( post => post.id !== id )
        this.setState({ posts: postList, hasLocals: true, localLength: postList.length })
        localStorage.setItem("posts", JSON.stringify(postList))
    }

    addHandler = (post) => {
        post.id = Math.floor(Math.random() *10)
        post.userId = post.id
        const postList = [...this.state.posts, post]
        this.setState({ posts: postList, hasLocals: true, localLength: postList.length })
        localStorage.setItem("posts", JSON.stringify(postList))
    }
    
    getPosts = ({id=null, userId=null, limited=10}) => {
        this.setState({ iconLoading: true })
        let url = 'https://jsonplaceholder.typicode.com/posts';
        if(id)
            url += "/"+id;
        else if(userId)
            url += "?userId="+ Math.floor(userId);
        return axios.get(url)
            .then(res => {
                return (id)? res.data : res.data.slice(0,limited);
            })
    }

    clearLocalStorage = () => {
        localStorage.removeItem("posts");
        this.setState({ hasLocals: false, alertVisible: true, alertMessage: 'local post removed.' });
        setTimeout(() => { 
            this.setState({ localLength: 0, alertVisible: false, alertMessage: 'alert message.' });
        }, 2000);
    }

    reLoadJSON = async () => {
        const userId = Math.floor(Math.random() * 10)
        const posts = await this.getPosts({userId:userId, limited:7})
        this.setState({ posts: posts, hasLocals: true, localLength: posts.length, iconLoading: false })
        localStorage.setItem("posts", JSON.stringify(posts))
    }

    alertCloseHandler = () => {
        this.setState({ alertVisible: false, alertMessage: 'alert message.' })
    }

    /* Start */
    async componentDidMount(){
        if ( localStorage.getItem("posts") ){
            const locals = JSON.parse(localStorage.getItem("posts"))
            this.setState({ posts: locals, hasLocals: true, localLength: locals.length, })
        } else {
            const posts = await this.getPosts({userId:3, limited:3})
            this.setState({ posts: posts, hasLocals: true, localLength: posts.length, iconLoading: false })
            localStorage.setItem("posts", JSON.stringify(posts))
        }
    }

    render() { 
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <Card 
                        title={post.title} 
                        key={post.id} 
                        bordered={false} 
                        style={{margin: "15px 0px"}}
                    >
                        <div className="card-body">
                            <div className="icon-container">
                                <img className="icon-image" src={IconImage} alt="icon" />
                            </div>
                            <p>userId: {post.userId}</p>
                            <p>{post.body}</p>
                            <Link to={'/todos/'+post.id}>
                                <Button type="primary">Detail: {post.id}</Button>
                            </Link>
                            <Button type="danger" icon="close" onClick={()=> this.deleteHandler(post.id)}>
                                Delete
                            </Button>
                        </div>
                    </Card>
                )
            })
        ) : (
            <Card
                bordered={false} 
                style={{margin: "15px 0px"}}
            >
                <Title level={4} style={{textAlign:'center'}}>No Posts Yet</Title>
                <div style={{margin: 10, textAlign:'center'}}>
                    <Button
                        loading={this.state.iconLoading}
                        shape="round"
                        onClick={()=>{ this.reLoadJSON() }}
                    >reLoad JSON</Button>
                </div>                
            </Card>
        )

        const isInLocalStorage = (!this.state.hasLocals)? (
            <p style={{textAlign:'center'}}>No Data Store in localStorage.</p>
        ) : (
            <p style={{textAlign:'center', cursor:'pointer'}}>
                {this.state.localLength} Data Store in localStorage. 
                <Button size="small" style={{margin:'0 4px'}}
                    shape="round"
                    onClick={() => { this.clearLocalStorage() }}
                >Remove it?</Button>
            </p>
        );

        const alert = (this.state.alertVisible) ? (
            <Alert
                style={{ marginBottom: 10}}
                message={ this.state.alertMessage }
                type="warning"
                showIcon
                closable
                afterClose={()=> { this.alertCloseHandler() }}
            />
          ) : (<div></div>)

        return ( 
            <div className="container">
                { alert }
                { isInLocalStorage }
                <NewPostForm addHandler={this.addHandler}/>
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