import React , { useState } from 'react';
import { Button } from 'antd';
import '../App.css';

const NewToDoForm = ({addHandler}) => {
    const [description, setDescription] = useState("");
    const [reporter, setReporter] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        addHandler( {description, reporter} )
        setDescription("");
        setReporter("");
    }

    return (
    <div className="container center">
        <form onSubmit={submitHandler} className="">
            <input type="text" 
                placeholder="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)} required 
            />
            <input type="text" 
                placeholder="reporter" 
                value={reporter}
                onChange={(e) => setReporter(e.target.value)} required 
            />
            <Button type="submit" className="">
                <i className="material-icons left">send</i> Add
            </Button>
        </form>
    </div>
    )}
 
export default NewToDoForm;