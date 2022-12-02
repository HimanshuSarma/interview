import React, { useState } from "react";
import axios, { all } from 'axios';
import { useEffect } from "react";

const Admin = () => {  
    
    const [formState, setFormState] = useState({
        title: '',
        price: '',
        image: ''
    })

    const [allQueries, setAllQueries] = useState([])

    const getBase64 = (file, cb) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            cb(reader.result)
        }
        reader.onerror = function (error) {
            console.log('Error: ', error)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5005/api/admin/postProduct', formState)
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                alert(`Product posted successfully.`)
            } else {
                alert(`Product couldn't be posted.`)
            }
        })
        .catch(err => {
            console.log(err);
            alert(`Product couldn't be posted.`)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:5005/api/query/getAll`)
        .then(allQueriesResponse => {
            setAllQueries(allQueriesResponse.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    console.log(allQueries);

    return (
        <>
        <h1>Admin panel</h1>
        <div>
            <h3>Add product form</h3>
            <form>
                <div>
                    <label>Product title</label>
                    <input value={formState.title} onChange={e => {
                        setFormState(formState => {
                            return {
                                ...formState,
                                title: e.target.value
                            }
                        })
                    }} type="text" required />
                </div>

                <div>
                    <label>Price</label>
                    <input value={formState.price} onChange={e => {
                        setFormState(formState => {
                            return {
                                ...formState,
                                price: e.target.value
                            }
                        })
                    }} type="number" required />
                </div>

                <div>
                    <label>Image</label>
                    <input onChange={e => {
                        const reader = new FileReader()
                        const files = e.target.files
                        reader.onload = function () {
                          getBase64(e.target.files[0], (result) => {
                            setFormState(formState => {
                                return {
                                    ...formState,
                                    image: result
                                }
                            })
                          })
                        }
                    
                        if (typeof files[0] === typeof new Blob) {
                          reader.readAsDataURL(files[0])
                        }
                    }} type="file" />
                </div>

                <button onClick={e => {
                    submitHandler(e)
                }}>Submit</button>
            </form>
        </div>

        <div>
            <h1>All queries</h1>
            <div style={{display: 'grid', gridTemplateColumns: '45% 45%', gap: '1rem'}}>
                {allQueries.map((query, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <div>
                                <p>Name: {query.name}</p>
                                <p>Email: {query.email}</p>
                                <p>Phone: {query.phone}</p>
                                <p>Query: {query.query}</p>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Admin;