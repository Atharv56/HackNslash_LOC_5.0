import { addDoc, collection, Timestamp } from "firebase/firestore"
import React, {useState} from "react"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from "../firebase"

export default function AddArticle() {
    const [progress, setProgress] = useState(0)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: Timestamp.now().toDate(),
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})

    }

    const handleImageChange = (e) => {
        setFormData({...formData, image: e.target.files[0]})
    }

    const handlePublish = ()=>{
        if(!formData.title || !formData.description|| !formData.image){
            alert('Fill All the fields')
            return;
        }
        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`)
        const uploadImage = uploadBytesResumable(storageRef, formData.image)
        uploadImage.on("state_changed", 
        (snapshot) => {
            const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progressPercent)
        },
        (err) => {
            console.log(err)
        }, 
        () => {
            setFormData({title: "",
            description: "",
            image: "",})
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
                const articleRef = collection(db, "blogs")
                addDoc(articleRef, {title: formData.title, description: formData.description, image_url: url, createdAt: Timestamp.now().toDate()})
            })
            .then(() => {
                toast("Article add successfully", {type: "success"});
                setProgress(0)
            })
            .catch(err  => {
                toast("Error adding article", {type: "error"})
            })
        }
        )

    }


  return (
        <div className="border p-3 mt-3 bg-light" style={{position: "fixed",}}>
            <h2>Create Article</h2>
            <label htmlFor="">Title</label>
            <input type="text" name= "title" className= "form-control" value={AddArticle.title} onChange={(e) => handleChange(e)}>

            </input>
            <label htmlFor="">Description</label>
            <input type="text" name= "description" className= "form-control" value={formData.description} onChange={(e) => handleChange(e)}>
                
            </input>
            <label htmlFor="">Image</label>
            <input type="file" name= "image" className= "form-control" onChange={(e) => handleImageChange(e)}>
                
            </input>
            {progress === 0 ? null: ( <div className="progress">
                <div className="progress-bar progress-bar-striped mt-2" style={{width: `${progress}%`}}>
                    {`uploading image ${progress}%`}
                </div>

            </div>
            )}
           
            <button className="form-control btn-primary mt-2" onClick={handlePublish}>Publish</button>
        </div>
  )
}
