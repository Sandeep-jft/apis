import React from 'react'

const CategoryDetails = ({details={}}) => {
  return (
    <div>
        <h1>CategoryDetails</h1>
        <br />
        <h3> {details.id} - {details.title} </h3>
    </div>
  )
}

export const getServerSideProps = async (context)=>{
    const {id} = context.params;
    const response = await fetch(`http://localhost:3000/api/category/${id.toString()}`);
    const data = await response.json();
    return {
        props:{
            details:data
        }
    }
}

export default CategoryDetails