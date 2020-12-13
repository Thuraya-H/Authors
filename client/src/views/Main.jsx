import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import axios from 'axios';

const Main = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            });
    },[])

    return (
        <div>  
           {loaded && <AuthorList authors={author} />}
        </div>
    )
}

export default Main;