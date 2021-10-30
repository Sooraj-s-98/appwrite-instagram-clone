import {useState,useEffect} from 'react';
import PostComponent from '../component/PostComponent';
import Router, { useRouter } from "next/router";
import  { useGetUser } from "../hooks/index";
import Login from "../component/Login";
import CreatePost from '../component/createpost';
import api from "../api/api";
import { Server } from "../utils/config";
import InfiniteScroll from 'react-infinite-scroll-component';
import OpenGraph from 'src/component/opengraph'

const Index = ({openPost}) => {


  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  const [tab, setTab]=useState("home");
  const [postList,setPostList]=useState([])
  const [pageNumber,setPageNumber]=useState(0);
  const [hasmore,setHasmore]=useState(true);

  useEffect(()=>{
    console.log("login", user)
    if(!user){
      setTab("login")
    }
    else{
      setTab("home")
      listPosts();
    }
  },[user])


  const listPosts=async()=>{
    try{
    const response=await api.listPosts(Server.collectionID,[],10,pageNumber);
    if(response.documents.length==0){
      setHasmore(false)
    }
    else{
      setPostList(postList.concat(response.documents))
    }
    console.log("posts",response.documents)
  }
  catch(e){
    console.log("postsfailed")
  }
  }
  return (
    <>
            <OpenGraph metaData={openPost} />

      {tab=="home" &&
      <div className="main-top">

        <nav className="navbar">
          <div className="nav-wrapper" id="navwrapper">
            <img src="image/logo.PNG" className="brand-img" alt="" />
            <input id="containersearch" type="text" className="search-box" placeholder="search" />
            <div className="nav-items" id="nav-items" >
              <img src="image/home.PNG" className="icon" alt="" />
              <img src="image/messenger.PNG" className="icon" alt="" />
            <img src="image/add.PNG" className="icon" alt=""  onClick={()=> setTab("createpost")} />
              <img src="image/explore.PNG" className="icon" alt="" />
              <img src="image/like.PNG" className="icon" alt="" />
              <div className="icon user-profile"></div>
            </div>
          </div>
        </nav>


        <div className="main-content">
          <div className="main-center" id="main-center">


            <div className="main-right" id="main-right">
              <div className="status-wrapper">
                <div className="status-card">
                  <div className="profile-pic"><img src="image/sooraj.jpg" alt="" /></div>
                  <p className="username">user_name_1</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic"><img src="image/sooraj.jpg" alt="" /></div>
                  <p className="username">user_name_2</p>
                </div>
                <div className="status-card">
                  <div className="profile-pic"><img src="image/sooraj.jpg" alt="" /></div>
                  <p className="username">user_name_3</p>
                </div>

                <div className="status-card">
                  <div className="profile-pic"><img src="image/sooraj.jpg" alt="" /></div>
                  <p className="username">user_name_3</p>
                </div>

                <div className="status-card">
                  <div className="profile-pic"><img src="image/sooraj.jpg" alt="" /></div>
                  <p className="username">user_name_3</p>
                </div>

                <div className="status-card">
                  <div className="profile-pic"><img src="image/sooraj.jpg" alt="" /></div>
                  <p className="username">user_name_3</p>
                </div>

              </div>

              <InfiniteScroll
  dataLength={postList.length} //This is important field to render the next data
  next={()=>{
    setPageNumber(old=>old+10);
    listPosts();
  }}
  hasMore={hasmore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
{postList.map((postData,i)=>(
                  <div key={i}>
                         <PostComponent postData={postData}/>
                  </div>
                ))}
</InfiniteScroll>

            </div>

            <div className="main-left" id="main-left">
              <div className="followers" >
                <h3> Suggections For You </h3>
                <div className="follow-card">
                  <div className="profile-pic-follow"><img src="image/sooraj.jpg" alt="" /></div>
                  <div className="">
                    <h6 className="followusername">
                      user_name_3 </h6>
                    <h6 className="">
                      Followers You </h6>
                  </div>
                  <a className="followbtn"> Follow </a>
                </div>

                <div className="follow-card">
                  <div className="profile-pic-follow"><img src="image/sooraj.jpg" alt="" /></div>
                  <div className="">
                    <h6 className="followusername">
                      user_name_3 </h6>
                    <h6 className="">
                      Followers You </h6>
                  </div>
                  <a className="followbtn"> Follow </a>
                </div>

                <div className="follow-card">
                  <div className="profile-pic-follow"><img src="image/sooraj.jpg" alt="" /></div>
                  <div className="">
                    <h6 className="followusername">
                      user_name_3 </h6>
                    <h6 className="">
                      Followers You </h6>
                  </div>
                  <a className="followbtn"> Follow</a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>}
      {
        tab=="login" &&
        <>
         <Login dispatch={dispatch}/>
        </>
      }
            {
        tab=="createpost" &&
        <>
          <CreatePost />
        </>
      }
    </>
  );
};

export default Index;



export const getServerSideProps = async (context) => {
  const playlistid = context.query.playlist;
  const watchlistid = context.query.watchlistid;
  const id = context.query.id;
  const type = context.query.type;
  console.log("playlistid", playlistid)
  console.log("watchlistid", watchlistid);
  console.log("id", id);
  console.log("type", type);
  console.log("watchlistid!=undefined ", watchlistid != undefined)
  if (watchlistid !== undefined && playlistid === undefined && id === undefined && type === undefined) {
    const resWatchlistRes = await fetch(`https://dev-video.liiighthouse.net/api/userApi/playlists/view?playlist_id=${watchlistid}`, {
      method: 'POST',

    });

    const resWatchlistResData = await resWatchlistRes.json();
    console.log("resWatchlistData", resWatchlistResData)
    if (resWatchlistResData.success == true) {

      return {
        props: {
          openPost: {
            image: resWatchlistResData.data.picture,
            titile: resWatchlistResData.data.title,
            description: `${resWatchlistResData.data.playlist_videos_count} videos`,
            url: "https://dev.liiighthouse.net/"
          }
        }
      }
    }

    else {
      return {
        props: {
          openPost: {
            image: "https://source.unsplash.com/llkVQVjns80/800x450",
            titile: "liiighthouse",
            description: "speek freely",
            url: "https://dev.liiighthouse.net/"
          }
        }
      }

    }
  }
  else if (watchlistid === undefined && playlistid !== undefined && id === undefined && type === undefined) {

    const resPlayListRes = await fetch(`https://dev-video.liiighthouse.net/api/userApi/playlist_view?playlist_id=${playlistid}`, {
      method: 'POST',

    });

    const resPlayListResData = await resPlayListRes.json();
    console.log("resPlayListData", resPlayListResData)
    if (resPlayListResData.success == true) {

      return {
        props: {
          openPost: {
            image: resPlayListResData.data.picture,
            titile: resPlayListResData.data.title,
            description: `${resPlayListResData.data.playlist_videos_count} videos`,
            url: "https://dev.liiighthouse.net/"
          }
        }
      }
    }

    else {
      return {
        props: {
          openPost: {
            image: "https://source.unsplash.com/llkVQVjns80/800x450",
            titile: "liiighthouse",
            description: "speek freely",
            url: "https://dev.liiighthouse.net/"
          }
        }
      }

    }

  }
  //https://dev-video.liiighthouse.net/api/userApi/v5/channels_view?channel_id=23&view_type=1


  else if (watchlistid === undefined && playlistid === undefined && id !== undefined && type != undefined) {



    if (type === "channel") {
      const resChannelRes = await fetch(`https://dev-video.liiighthouse.net/api/userApi/v5/channels_view?channel_id=${id}&view_type=1`, {
        method: 'POST',

      });

      const resChannelResData = await resChannelRes.json();
      console.log("resChannelData", resChannelResData)
      if (resChannelResData.success == true) {

        return {
          props: {
            openPost: {
              image: resChannelResData.data.details.channel_image,
              titile: resChannelResData.data.details.channel_name,
              description: resChannelResData.data.details.description,
              url: "https://dev.liiighthouse.net/"
            }
          }
        }
      }

      else {
        return {
          props: {
            openPost: {
              image: "https://source.unsplash.com/llkVQVjns80/800x450",
              titile: "liiighthouse",
              description: "speek freely",
              url: "https://dev.liiighthouse.net/"
            }
          }
        }

      }
    }
    else if(type === "profile"){

    }
    else if(type === "page"){
      
    }
    else if(type === "store"){
      
    }
    else if(type === "group"){
      
    }
    else{
      return {
        props: {
          openPost: {
            image: "https://source.unsplash.com/llkVQVjns80/800x450",
            titile: "liiighthouse",
            description: "speek freely",
            url: "https://dev.liiighthouse.net/"
          }
        }
      }

    }

  }

  else {
    return {
      props: {
        openPost: {
          image: "https://source.unsplash.com/llkVQVjns80/800x450",
          titile: "liiighthouse",
          description: "speek freely",
          url: "https://dev.liiighthouse.net/"
        }
      }
    }
  }


}