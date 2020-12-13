import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const Update = props => {
    const { id } = props;
    const [author, serAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                serAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = prod => {
        axios.put('http://localhost:8000/api/author/' + id, prod)
            .then(res =>{
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                    console.log(errors);
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
                console.log(errors);
            }) 
    }
        
    return (
        <div>
        {loaded && (
            <AuthorForm
                errors={errors}
                onSubmitProp={updateAuthor} 
                intailName={author.name}
                from={0}
            />     
        )}
        </div>
    )
}

export default Update;