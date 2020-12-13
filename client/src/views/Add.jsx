import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';

const Update = props => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            });
    },[])
    const createAuthor = auth => {
        axios.post('http://localhost:8000/api/author', auth)
            .then(res=>{
                setAuthor([...author, res.data]);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                  } else {
                    navigate("/author");
                  }
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }
    return (
        <div>
        <AuthorForm onSubmitProp={createAuthor} intailName="" errors={errors} from={1}/>    
        </div>
    )
}

export default Update;