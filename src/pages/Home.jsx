// import React,{useEffect,useState} from 'react'
// import Service from '../appwrite/config'
// import { Container,Postcard } from '../components'
// import { useSelector } from "react-redux";

// const Home = () => {
//     const [Posts, setPosts] = useState([])

//     useEffect(() => {
//         Service.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])
//   if(Posts.length===0){
//     return (
//         <div className="w-full py-8 mt-4 text-center">
//             <Container>
//                 <div className="flex flex-wrap">
//                     <div className="p-2 w-full">
//                         <h1 className="text-2xl font-bold hover:text-gray-500">
//                             Login to read posts
//                         </h1>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
//   }
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {Posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <Postcard {...post} />
//                     </div>
//                 ))}
//             </div>
//         </Container>
//     </div>
// )
// }

// export default Home




import React,{useEffect,useState} from 'react'
import Service from '../appwrite/config'
import { Container,Postcard } from '../components'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    const [Posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userdata);
    console.log(userData);
    useEffect(() => {
        if (userData) {
            Service.getPostByID(userData.$id).then((post) => {
                if (post) setPosts(post.documents);
                else navigate("/");
            });
        } else navigate("/");
    }, []);
    if(Posts.length===0 && !userData){
    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
    }
    if(!(Posts.length===0) && userData){
    return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {Posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
        )
    }

    if(Posts.length===0 && userData){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                You are good to go ! Write your first post 
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
        }
}

export default Home