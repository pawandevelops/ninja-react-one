import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Loading from './Loading';
import useFetch from './useFetch';
//npx json-server --watch data/db.json --port 8500

const Home = () => {

    const { error, isPending, data: blogs } = useFetch('http://localhost:8500/blogs')

  const [naam, setNaam] = useState('Mario');

//   const handleDelete = (id)=>{
//       const newBlogs = blogs.filter(blog =>blog.id !== id);
//       setBlogs(newBlogs);
//   }


  return (
    <div className="home">
        {/* { conditional templating in react} */}
        {/* {blogs && <BlogList blogs={blogs} handleDelete = {handleDelete} title="All Blogs!"/>} */}
        {error && <div>{error}</div>}
        {isPending && <Loading/>  }
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}

        {/* <button onClick={()=>setNaam('Luigi')}>Change Name</button>
        <p>{naam}</p> */}
        
    </div>
  );
}
 
export default Home;