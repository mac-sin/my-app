import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

const NoMatchPage = () => {
  return ( 
    <div style={{textAlign:'center', paddingTop:60, paddingBottom:40}}>
      <h1 style={style.h1}>OPPS!!</h1>
      <h3 style={style.h3}>Page Not Found</h3>
      <Link to='/'>
        <Button shape="round">Go Home</Button>
      </Link>
    </div>
  );
}

const style = {
  h1: {
    color: "#777",
    fontSize: "3em",
    lineHeight: "1em",
    fontWeight: 100,
  },
  h3: {
    color: "#777",
    fontSize: "1.2em",
    lineHeight: "1em",
    fontWeight: 200,
    marginBottom: 20,
  },
}

export default NoMatchPage;