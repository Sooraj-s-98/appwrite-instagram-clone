import React from 'react'
import { NextSeo } from 'next-seo'


export default function openGraph({metaData}) {
    return (
        <NextSeo
        title={metaData?.title}
        description={metaData?.description}
        canonical={metaData?.embed_link}
        openGraph={{
          url: metaData?.url,
          title: metaData?.title,
          description: metaData?.description,
          images: [
            {
              url: metaData?.image,
              width: 800,
              height: 600,
              alt: 'Default video',
            },
           
          ],
          site_name: 'Liiighthouse',
        }}
   
      />
    )
}
