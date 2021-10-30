import React from 'react'

export default function PostComponent({postData}) {
    return (
        <div>
            <div className="post" >

                <div className="container">
                    <div className="top_bar">
                        <div className="profile_img">
                            <img src={postData.user_picture}
                                alt="" />
                            <span>{postData.user_name}</span>
                        </div>
                        <i className="fa fa-ellipsis-h"></i>
                    </div>
                    <div className="main_img">
                        <img src={postData.image}
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
                            <p>{postData.like_count} Likes</p>
                        </div>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi impedit facere, ad
                                adipisci, cum veritatis libero ipsam, ex quo quis neque debitis tenetur consequatur?</p>
                        </div>
                        <div className="comments">
                            <p>View All {postData.comment_count} Comments</p>
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
    )
}
