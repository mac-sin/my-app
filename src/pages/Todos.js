import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

const Todos = (props) => {
    const [body, setBody] = useState('my-body');
    const onChange = str => {
        console.log('Content change:', str);
        setBody( str );
      };
    
    // 與 componentDidMount 和 componentDidUpdate 類似：
    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        // document.title = `You clicked ${count} times`;
        // clickHandler(count);
    });

    const todoList = props.todos.length? (
        props.todos.map( todo => {
            return (
                <Card
                    bordered={false} 
                    style={{margin: "15px 0px"}}
                    key={todo.id}
                >
                    <div id={todo.id}>
                        <Title level={3}>{todo.title}</Title>
                        <Paragraph>{todo.body}</Paragraph>
                        <Paragraph
                            type="secondary"
                            editable={{ onChange: onChange }}
                        >{body}
                        </Paragraph>
                        <div style={{marginBottom:10}}>
                            <Text code>id: {todo.id}</Text>
                            <Text code>userId: {todo.userId}</Text>
                        </div>

                        <Link to={'/todos/'+todo.id}>
                            <Button type="primary">Detail: {todo.id}</Button>
                        </Link>
                    </div>
                </Card>
            )
        })
    ) : (
        <Card
            bordered={false}
            style={{margin: "15px 0px"}}
        >
            <div>No Todos</div>
        </Card>
    )
    return ( 
        <div className="container">
            <h2>Todos(Redux)</h2>
            { todoList }
        </div>
        );
}

const mapStateToProps = ( state ) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos);