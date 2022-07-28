import Link from 'next/link';
import React, {useState} from 'react'

const Category = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async ()=>{
        const response = await fetch('/api/category');
        const data = await response.json();
        setCategories(data);
    }

    const handleSubmit = async () =>{
        const body = {
            method:'POST',
            body:JSON.stringify({
                    userId: 1,
                    title: "Working"
            }),
            headers:{
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        const response = await fetch('/api/category',body);
        const data = await response.json();
        setCategories(data);

    }

    const handleDelete = async (id)=>{

        const response = await fetch(`/api/category/${id}`,{
            method:"DELETE"
        });
        const data = await response.json();
        getCategories()

    }

  return (
    <div>
        <h1>Category Landing Screen</h1>
        <br />
        <button onClick={getCategories} >
            Get Categories
        </button>
        <br />
        {
            categories.map(item=>{
                return <Link href={`category/${item.id}`} key={item.id}  passHref>
                <div>
                    <h3>{item.id} - {item.title}</h3>
                    <hr />
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </div>
                </Link>
            })
        }
        <br />
        <button onClick={handleSubmit} >
            Submit
        </button>
    </div>
  )
}

export default Category