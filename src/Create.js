import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle ] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title, body, author}
        setIsPending(true);
        fetch('http://localhost:8500/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog Added');
            setIsPending(false);
            history.push('/'); // route for the homepage
        })

    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" value={title} onChange={ e => setTitle(e.target.value)}required />
                <label>Blog Body:</label>
                <textarea value={body} onChange={e => setBody(e.target.value)} required></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="luigi">luigi</option>
                    <option value="john">john</option>
                </select>
                {!isPending && <button>add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
      );
}
 
export default Create;