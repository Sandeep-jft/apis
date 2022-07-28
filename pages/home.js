import React from 'react'
import styles from 'styled-components';

const Title = styles.h1`
    color:${({theme})=>theme.colors.primary}
`

const Home = () => {
  return (
    <div>
        <Title>Home</Title>
        <br />
        <h3>Name of user in env is : {process.env.NEXT_PUBLIC_NAME}</h3>
    </div>
  )
}

// export const getServerSideProps = (context)=>{
//     const db = process.env.DB_USER;
//     const pass = process.env.DB_PASS;
//     console.log(`connection to database with username ${db} and password ${pass} is in process`);
//     return {
//         props:{
//             data:'Hello'
//         }
//     }
// }

export const getStaticProps = (context)=>{
    const db = process.env.DB_USER;
    const pass = process.env.DB_PASS;
    console.log(`Static: connection to database with username ${db} and password ${pass} is in process`);
    return {
        props:{
            data:'Hello'
        }
    }
}

export default Home