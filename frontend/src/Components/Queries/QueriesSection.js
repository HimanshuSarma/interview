import axios from "axios";
import { useState } from "react";

const QueriesForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        query: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5005/api/query/post', formState)
        .then(response => {
            if (response.status === 200) {
                alert(`Query posted successfully.`);
            } else {
                alert(`Some error occured. Query couldn't be posted.`);
            }
        })
        .catch(err => {
            console.log(err);
            alert(`Some error occured.`)
        })
    }

    return (
        <>
        <div style={{marginBottom: '5rem'}}>
            <h1>Enter your Query.</h1>
            <form>
                <div>   
                    <label>Name</label>
                    <input value={formState.name} onChange={e => {
                        setFormState(formState => {
                            return {
                                ...formState,
                                name: e.target.value
                            }
                        })
                    }} type="text" />
                </div>

                <div>   
                    <label>Email</label>
                    <input value={formState.email} onChange={e => {
                        setFormState(formState => {
                            return {
                                ...formState,
                                email: e.target.value
                            }
                        })
                    }} type="email" />
                </div>

                <div>   
                    <label>Phone</label>
                    <input value={formState.phone} onChange={e => {
                        setFormState(formState => {
                            return {
                                ...formState,
                                phone: e.target.value
                            }
                        })
                    }} type="number" />
                </div>

                <div>   
                    <label>Query</label>
                    <input value={formState.query} onChange={e => {
                        setFormState(formState => {
                            return {
                                ...formState,
                                query: e.target.value
                            }
                        })
                    }} type="text" />
                </div>

                <button onClick={e => {
                    handleSubmit(e)
                }}>Submit</button>
            </form>
        </div>
        </>
    )
};

export default QueriesForm;