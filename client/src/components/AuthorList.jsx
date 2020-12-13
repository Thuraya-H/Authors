import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from './DeleteButton';
import AuthorForm from './AuthorForm';

const AuthorList = props => {
    const [author, setAuthor] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=> setAuthor(res.data));
    },[])

    const removeFromDom = authorId => {
        setAuthor(author.filter(auth => auth._id !== authorId));
    }
    return (
        <div className="container w-25">
            <h2>Favorite authors</h2>
            <Link to="new">Add an author </Link>
            
            <p>We have quotes by:</p>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action available</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map((author, idx)=>{
                    return(
                    <tr>
                        <td>{author.name} </td>
                        <td>
                            <button onClick={()=>navigate("author/"+author._id+"/edit")} className="btn btn-primary px-4">Edit</button>
                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                        </td>
                    </tr>
                    )})}
                </tbody>
            </table>  
        </div>
    )
}

export default AuthorList;