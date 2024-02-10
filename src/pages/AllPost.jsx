import React, { useEffect,useState } from 'react'
import Service from '../appwrite/config.js'
import { Container,Postcard } from '../components'

const AllPost = () => {
    const [Posts, setPosts] = useState([])
    useEffect(()=>{
        Service.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
    },[])
    
  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>{
            Posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <Postcard {...post}/>
                </div>
            ))
        }</div>
    </Container>
      
    </div>
  )
}

export default AllPost

