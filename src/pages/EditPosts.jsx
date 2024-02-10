import React, { useEffect, useState } from 'react'
import { Container,PostForm } from '../components'
import Service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
const EditPosts = () => {
    const [posts, setPosts] = useState(null)
    const {slug}=useParams() ;
    const navigate=useNavigate() 

    useEffect(()=>{
        if(slug){
            console.log(slug);
            Service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[])
  return posts?<div className='py-8'>
    <Container>
        <PostForm post={posts}/>
    </Container>
  </div>:null
}

export default EditPosts
