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

  const response= await api.imageUpload(imageUrl,  [`*`],
  [`user:${user["$id"]}`]);
  const imageURL=await api.imageView(response["$id"])
  const data = {
    user_name:user.name,
    image:imageURL.href,
    user_picture:user.prefs.user_picture,
  };
  const postresponse=await api.createPost(Server.collectionID,data,
  [`*`],
  [`user:${user["$id"]}`]
  )

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
