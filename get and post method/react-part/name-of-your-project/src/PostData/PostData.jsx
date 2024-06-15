import React, { useState } from 'react';
import axios from 'axios';

const PostData = () => {
    const [data, setData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        axios.post('http://localhost:5000/api/data', { data })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
           
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Data:</label>
                <input 
                    type="text" 
                    value={data} 
                    onChange={(e) => setData(e.target.value)} 
                />
                <input 
                    type="text" 
                    value={data} 
                    onChange={(e) => setData(e.target.value)} 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostData;
