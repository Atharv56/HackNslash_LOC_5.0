import React, {useEffect, useState} from 'react'
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import {db} from '../firebase'
import Delete from './deleteEvent'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
// import { FaHeart } from 'react-icons/fa';

// import LikeArticle from './likeArticle'

const EventContainer = () => {
  const [buttonLikes, setButtonLikes] = useState(0)
  const handleClickLikeButton = () => {
    setButtonLikes((prevValue) => prevValue + 1)
}
  const [articles, setArticles] = useState([])
  // const [article, setArticle] = useState(null);
  const [user] = useAuthState(auth);
  useEffect(()=>{
    const articleRef = collection(db, "events")
    const q = query(articleRef, orderBy("createdAt", "desc"))
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc)=>({
        id: doc.id, 
        ...doc.data(),
      }))
      setArticles(articles)
      console.log(articles)
    })
  }, [])
  return (
    <div>
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            image_url,
            createdAt,
            createdBy,
            userId,
            salary,
            likes
          }) => (
            <div className="border mt-3 p-3 bg-light" key={id}>
              <div className="row" style={{display: 'flex'}}>
                <div className="col-3">
                  <Link to={`/article/${id}`}>
                    <img
                      src={image_url}
                      alt="title"
                      style={{ height: 180, width: 180 }}
                    />
                  </Link>
                </div>
                <div className="col-9 ps-3">
                  <div className="row">
                    <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary">{createdBy}</span>
                      )}
                    </div>
                    <div className="col-6 d-flex flex-row-reverse">
                      {user && user.uid === userId && (
                        <Delete id={id} image_url={image_url} />

                      )}
                      {/* <FaHeart onClick={handleClickLikeButton}/> */}
                      
                    </div>
                  </div>
                  <h3 style={{padding:5,color:"blue",fontWeight: "bold"}}>{title}</h3>
                  <h2 style={{padding:5,color:"black",fontWeight: "bold"}}>${salary}</h2>

                  <p style={{padding:5}}>{createdAt.toDate().toDateString()}</p>
                  <h5 style={{padding:5,fontSize:15}}>{description}</h5>
                  <button style={{}}variant="primary" onClick={handleClickLikeButton}>Apply</button>
                      <div>{buttonLikes} number of applicants</div>
                  <div className="d-flex flex-row-reverse">
                  <div className="d-flex flex-row-reverse">
              {/* {user && <LikeArticle id={id} likes={articles.likes} />}
              <div className="pe-2">
                <p>{articles.likes.length}</p>
              </div> */}
            </div>
                    {/* {user && <LikeArticle id={id} likes={likes} />}
                    <div className="pe-2">
                      <p>{likes?.length} likes</p>
                    </div> */}
                    {/* {comments && comments.length > 0 && (
                      <div className="pe-2">
                        <p>{comments?.length} comments</p>
                      </div>
                    )} */}
                  </div>
                  <Delete  style={{padding:5}} id={id} image_url = {image_url}/>


                  </div>
                </div>
              </div>
          )
        )
      )}
    </div>
  )
}

export default EventContainer;
// export default function blogCont() {
//   return (
//     <div>
//         <h1>Atharv</h1>
//     </div>
//   )
// }
