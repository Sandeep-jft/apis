
import Head from 'next/head';
import React from 'react'
import Footer from '../components/Layout/Footer';


const Profile = () => {
  return (
    <div>
        <Head>
            <title>Profile Page</title>
            <meta name='description' content='profile page data' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <h3>Profile</h3>

    </div>
  )
}

export default Profile;

Profile.getLayout = function test(page){
    return (
        <>
        {page}
        <Footer />
        </>
    )
}