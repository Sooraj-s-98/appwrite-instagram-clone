import React from 'react'
import { NextSeo } from 'next-seo'

export default function openGraph({metaData}) {
    return (
<>
{console.log("metaData",metaData)}
<NextSeo
   title={  ( metaData.title!=null && metaData.title!=undefined && metaData.title!="" && metaData.title!="null" ) ? metaData.title :"liiighthouse"}
      openGraph={{
        type:"website",
        url: metaData.url!==undefined ? metaData.url : "https://dev.liiighthouse.net/",
        title:  ( metaData.title!=null && metaData.title!=undefined && metaData.title!="" && metaData.title!="null" ) ? metaData.title :"liiighthouse",
        description:  ( metaData.description!=null && metaData.description!=undefined && metaData.description!="" && metaData.description!="null" )? metaData.description : "",
        images: [
          {
            url:( metaData.image!=null && metaData.image!=undefined && metaData.image!="" && metaData.image!="null" )? metaData.image: "https://source.unsplash.com/llkVQVjns80/800x450",
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          }
        ],
        site_name: 'liiighthouse',
      }}
    />
</>
    )
}
