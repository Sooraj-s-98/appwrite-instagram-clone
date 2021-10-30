import React from 'react'
import OpenGraph from 'src/component/opengraph'

export default function post({openPost}) {
    return (
        <div>
        {console.log("openPost", openPost)}
            <OpenGraph metaData={openPost} />
            
            test post
        </div>
    )
}

export const getServerSideProps=async(context)=>{

  const id = context.query.id
  if(id==undefined){
    return{
      props:{openPost:{
        type:"post",
        image:"https://source.unsplash.com/llkVQVjns80/800x450",
        title:"liiighthouse",
        description:"speek freely",
        url:"https://dev.liiighthouse.net/"
      }}
    }
  }
  console.log("id",id)
  const  res= await fetch(`https://dev-social.liiighthouse.net/api/userApi/view_post?post_id=${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const data=await res.json();
   console.log("data",data)
  return{
    props:{openPost:{
      type:"post",
      image: data.data.image=="null" ?data.data.video.default_image :data.data.image,
      title:data.data.title,
      description:data.data.description
    }}
  }

}



  

