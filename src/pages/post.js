import React from 'react'
import OpenGraph from 'src/component/opengraph'

export default function post({openPost}) {
    return (
        <div>
        {console.log("openPost", openPost)}
            <OpenGraph metaData={{titile:openPost.description,image:openPost.image==null || openPost.image=="null"  ? openPost.video.default_image:openPost.image}} />
            
            test post
        </div>
    )
}

export const getServerSideProps=async(context)=>{

  const id = context.query.id
  console.log("id",id)
  const  res= await fetch(`https://dev-social.liiighthouse.net/api/userApi/view_post?post_id=${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const data=await res.json();

  return{
    props:{openPost:data.data}
  }

}

  

