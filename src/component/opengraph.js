import React from 'react'
import { NextSeo } from 'next-seo'


export default function openGraph({metaData}) {
    return (
        <NextSeo
 
        openGraph={{
          url: "",
          title: metaData.title,
          description: "description",
          images: [
            {
              url: metaData.image,
              width: 800,
              height: 600,
              alt: 'Default video',
            },
           
          ],
          site_name: 'insta',
        }}
   
      />
    )
}
