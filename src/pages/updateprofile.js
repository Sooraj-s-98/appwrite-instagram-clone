import {useRef,useState} from 'react'
import api from "../api/api";
import { Server } from "../utils/config";
import  { useGetUser } from "../hooks/index";

const updateprofile=()=> {
    const imageInput = useRef(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [imagePreview, setimagePreview] = useState(null)
    const [{ user, isLoading, isError }, dispatch] = useGetUser();
    const [bio, setBio]=useState("");
    const [userName, setUserName]=useState("");



    const handleSubmit=async()=>{
        const response= await api.imageUpload(imageUrl,  [`*`],
  [`user:${user["$id"]}`]);
  const imageURL=await api.imageView(response["$id"])


  const data = {
    user_name:userName,
    user_picture:imageURL.href,
    user_bio:bio,
  };
const postresponse=await api.UpdateAccount(data)
    }



    const addPicture = (event) => {
   
   
        setImageUrl(event.target.files[0]);
        setimagePreview(URL.createObjectURL(event.target.files[0]))
        
          };
    return (
        <div>
               <div className="main-top" style={{width:"700px"}}>
      
    <div className="login__container">
      <h1>Edit profie</h1>
      <div className="form__area">
        <div className="form">
     
            <div className="form__field">
              <input
                type="username"
                id="username"
                name="username"
                onChange={(e) => setUserName(e.target.value)}
            
              />
              <label htmlFor="username">user name</label>
            </div>
            <div className="form__field">
              <input
                type="bio"
                id="bio"
                name="bio"
                onChange={(e) => setBio(e.target.value)}

              />
              <label htmlFor="bio">Bio</label>
            </div>
            <div className="form__field">
            <input
                type="file"
                accept="image/x-png,image/jpeg"
                name="picture"
                ref={imageInput}
                id="gifupload"
                onChange={addPicture}
                style={{ display: "none" }}
              ></input>
                       <button
                type="button"
                onClick={() => imageInput.current.click()}
                className="btn btn-outline-light ml-2"
              >
                Add<br></br> Image
              </button>
              <label htmlFor="picture">profile photo</label>
            </div>
            {imagePreview != null &&
                <img
                style={{width:"200px", height:"200px"}}
                  className=""
                  src={imagePreview ? imagePreview : ""}
                  alt=""
                />
              }
            <button className="primary-insta-btn" onClick={()=>handleSubmit()}>
                update
            </button>

        </div>

      </div>
    </div>
    </div>
        </div>
    )
}

export default updateprofile
