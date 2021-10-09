import React from 'react';

const Index = () => {
  return (
    <>

      <div className="main-top">

        <nav className="navbar">
          <div className="nav-wrapper" id="navwrapper">
            <img src="image/logo.PNG" className="brand-img" alt="" />
            <input id="containersearch" type="text" className="search-box" placeholder="search" />
            <div className="nav-items" id="nav-items" >
              <img src="image/home.PNG" className="icon" alt="" />
              <img src="image/messenger.PNG" className="icon" alt="" />
              <img src="image/add.PNG" className="icon" alt="" />
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



              <div className="post" >

                <div className="container">
                  <div className="top_bar">
                    <div className="profile_img">
                      <img src="image/sooraj.jpg"
                        alt="" />
                      <span>sooraj s</span>
                    </div>
                    <i className="fa fa-ellipsis-h"></i>
                  </div>
                  <div className="main_img">
                    <img src="image/cover 1.png"
                      alt="" />
                  </div>
                  <div className="footer">
                    <div className="icons">
                      <div className="left_side">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-comment-o" aria-hidden="true"></i>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                      </div>
                      <div className="right_side">
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="likeCount">
                      <p>10,890 Likes</p>
                    </div>
                    <div className="content">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi impedit facere, ad
                        adipisci, cum veritatis libero ipsam, ex quo quis neque debitis tenetur consequatur?</p>
                    </div>
                    <div className="comments">
                      <p>View All 1008 Comments</p>
                    </div>
                    <div className="comments_box">
                      <div className="icon">😊</div>
                      <div className="input_field">
                        <input type="text" placeholder="Add a Comments..." id="" />
                      </div>
                      <div className="btn"><button>Post</button></div>
                    </div>
                  </div>
                </div>
              </div>
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
      </div>
    </>
  );
};

export default Index;
