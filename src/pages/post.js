import React from 'react'
import OpenGraph from 'src/component/opengraph'

export default function post({opengraphImage}) {
    return (
        <div>
            <OpenGraph  metaData={{image:opengraphImage}}/>
            test post
        </div>
    )
}


export async function getServerSideProps(context) {
    const id = context.query.id
 
  
    const res = await fetch(`https://dev-social.liiighthouse.net/api/userApi/view_post?post_id=${id}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        opengraphTitile:"",
        opengraphImage:data.data.profile.picture,
        opengraphurl:"",
        opengraphdescription:data.data.description ,
      }, // will be passed to the page component as props
    }
  }

