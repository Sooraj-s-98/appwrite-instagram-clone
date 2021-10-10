import {useState,useEffect} from 'react';
import PostComponent from '../component/PostComponent';
import Router, { useRouter } from "next/router";
import  { useGetUser } from "../hooks/index";
import Login from "../component/Login"

const Index = () => {


  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  const [tab, setTab]=useState("home")

  useEffect(()=>{
    if(!user){
      setTab("login")
    }
    else{
      setTab("home")
    }
  },[user])

  return (
    <>


      {tab=="home" &&
      <div className="main-top">

        <nav className="navbar">
          <div className="nav-wrapper" id="navwrapper">
            <img src="image/logo.PNG" className="brand-img" alt="" />
            <input id="containersearch" type="text" className="search-box" placeholder="search" />
            <div className="nav-items" id="nav-items" >
              <img src="image/home.PNG" className="icon" alt="" />
              <img src="image/messenger.PNG" className="icon" alt="" />
            <img src="image/add.PNG" className="icon" alt=""   />
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

                <PostComponent/>

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
    </>
  );
};

export default Index;
