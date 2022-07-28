import Image from 'next/image';
import React from 'react';
import image from '../public/1.jpg';

const Posts = () => {
  return (
    <div>
        <h3>Posts</h3>
        <br />
        <Image blurDataURL={image} src={image} alt='Image' placeholder='blur' height={300} width={400} />
        <hr />
        {
            ['1','2','3','4','5'].map(item=>{
                return <Image  src={`/${item}.jpg`} key={item} alt={`${item}`} height={300} width={400} />
            })
        }
    </div>
  )
}

export default Posts