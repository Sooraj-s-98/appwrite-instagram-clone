import {useRef,useState} from 'react'
import api from "../api/api";
import { Server } from "../utils/config";
import  { useGetUser } from "../hooks/index";

export default function CreatePost() {
  const imageInput = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePreview, setimagePreview] = useState(null)
  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  const addPicture = (event) => {
   
   
   setImageUrl(event.target.files[0]);
   setimagePreview(URL.createObjectURL(event.target.files[0]))
   
     };


     const UploadPost=async()=>{

  const response= await api.imageUpload(imageUrl);
  const imageURL=await api.imageView(response["$id"])
  const data = {
    user_name:"sooraj_s",
    comment_count:0,
    image:imageURL.href,
    like_count:0,
    user_picture:"image/sooraj.jpg",
  };
  const postresponse=await api.createPost(Server.collectionID,data,
  [`*`],
  [`user:${user["$id"]}`]
  )
//    const rePost=await api.listPosts(Server.collectionID)
// console.log("Server.collectionID",Server.collectionID )
     }
    return (
        <div>
          New  post


                       <div>
              <button
                type="button"
                onClick={() => imageInput.current.click()}
                className="btn btn-outline-light ml-2"
              >
                Add<br></br> Image
              </button>
              <input
                type="file"
                accept="image/x-png,image/jpeg"
                name="picture"
                ref={imageInput}
                id="gifupload"
                onChange={addPicture}
                style={{ display: "none" }}
              ></input>
            </div>

{imagePreview != null &&
                <img
                style={{width:"200px", height:"200px"}}
                  className=""
                  src={imagePreview ? imagePreview : ""}
                  alt=""
                />
              }

              <button onClick={()=>UploadPost()}>upload post</button>
        </div>
    )
}
