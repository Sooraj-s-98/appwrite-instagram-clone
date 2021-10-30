import React from 'react'
import { NextSeo } from 'next-seo'

export default function openGraph({metaData}) {
    return (
<>
{console.log("metaData",metaData)}
<NextSeo
      openGraph={{
        type: 'website',
        url: metaData.url ? metaData.url : "https://dev.liiighthouse.net/",
        title: metaData.title ? metaData.title :"liiighthouse",
        description: metaData.description ? metaData.description : "",
        images: [
          {
            url: metaData.image? metaData.image: "https://dev.liiighthouse.net/images/icons/logo_liiighthouse.svg",
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
