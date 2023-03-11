import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../firebase'

export default function Delete({id, image_url}) {
    const handleDelete = async () => {
        try{
         await deleteDoc(doc(db, "blogs", id))
         toast("Article deleted successfully", {type: "success"})
         const storageRef = ref(storage, image_url)
         await deleteObject(storageRef)
        }
        catch(error) {
            toast("Error deleting the article", {type: "error"})
            
        }
        
    }
  return (
    
    <div>
      <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
    </div>
  )
}