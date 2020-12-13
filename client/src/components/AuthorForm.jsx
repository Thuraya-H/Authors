import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const AuthorForm = props => {

    const {intailName, onSubmitProp, errors, from} = props;
    const [name, setName] = useState(intailName); 

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <div className="container w-25 p-3">
        <form onSubmit={onSubmitHandler}>
            <h1>Favorite Authors</h1>
            <Link to="/author">Home</Link>
            {from ? <p>Add a new author:</p> : <p>Edit this author:</p>}
            {errors.map((err, index) => <p className="text-danger"key={index}>{err}</p>)}
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Name</label>
                <input 
                    className="col form-control ml-3" 
                    type="text" name="name" value={name}
                    onChange = {(e)=>setName(e.target.value)}/>
            </div>
            <div className="d-felx">
                <button onClick={()=>navigate("/author")} className="btn btn-secondary px-4 mx-2">Cancel</button>
                <button className="btn btn-primary px-4 mx-2" type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default AuthorForm;