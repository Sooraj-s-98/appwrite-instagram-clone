import React from 'react'
import { NextSeo } from 'next-seo'


export default function openGraph() {
    return (
        <NextSeo
 
        openGraph={{
          url: "",
          title: "title",
          description: "description",
          images: [
            {
              url: "",
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
