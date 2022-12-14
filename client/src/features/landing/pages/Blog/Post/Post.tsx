import React from 'react'
import pageProps from '../../../../../app/utils/props/pageProps'
import Breadcrum from '../../../components/Breadcrum'


const Post:React.FC<pageProps> = ({pageData}:pageProps) => {


  return (
    <>
<Breadcrum pageData={pageData}/>

      
    </>
  )
}

export default Post
