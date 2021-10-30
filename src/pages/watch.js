import React from 'react'
import OpenGraph from 'src/component/opengraph'

export default function watch({openPost}) {
    return (
        <div>
                 <OpenGraph metaData={openPost} />
            watch page
        </div>
    )
}


export const getServerSideProps=async(context)=>{
//https://dev-video.liiighthouse.net/api/userApi/single_video?video_tape_id=71
    const id = context.query.video
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
    const  res= await fetch(`https://dev-video.liiighthouse.net/api/userApi/single_video?video_tape_id=${id}`, {
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
        image: data.data.default_image ,
        title:data.data.title,
        description:data.data.description
      }}
    }
  
  }
