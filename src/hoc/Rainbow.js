// Higher Order Component...
import React from 'react';
import { withRouter } from 'react-router-dom';

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColor = colours[Math.floor(Math.random() * (colours.length-1))];
    const styles = {
        backgroundColor: randomColor,
        color: "#fff",
    }
    return (props) => {
        return (
            <div style={styles}>
                <p style={{padding:4}}>WrappedComponent</p>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
 
export default Rainbow
