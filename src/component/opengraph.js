import React from 'react'
import { NextSeo } from 'next-seo'

export default function openGraph({metaData}) {
    return (
<>
{console.log("metaData",metaData)}
<NextSeo
      openGraph={{
        type: metaData.type,
        url: metaData.url ? metaData.url : "https://dev.liiighthouse.net/",
        title: metaData.title ? metaData.title :"liiighthouse",
        description: metaData.description ? metaData.description : "",
        images: [
          {
            url: metaData.image? metaData.image: "https://source.unsplash.com/llkVQVjns80/800x450",
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          }
        ],
      }}
    />
</>
    )
}
