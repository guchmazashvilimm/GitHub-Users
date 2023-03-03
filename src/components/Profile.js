import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import DisplayTable from './DisplayTable';
const Profile = ()=>{
    const [data,setData] = useState({});
    const [username,setUsername] = useState("");
    const [repositories,setRepositories] = useState([]);

    const changeHandler = (e) =>{
        setUsername(e.target.value)
    };

    const submitHandler = async e =>{
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson)
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        if (profileJson){
            setData(profileJson);
            setRepositories(repoJson);
        }

    };
    return (
        <>
        <div className='container'>
            <div className='s-bar'>
                <Form className="d-flex form">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    value={username}
                    onChange={changeHandler}
                    aria-label="Search"/>
                    <Button variant="outline-dark" onClick={submitHandler}>Search</Button>
                </Form>
                <hr/>
                <DisplayTable data={data} repositories={repositories} />
            </div>
        </div>
        </>
    )
}

export default Profile;