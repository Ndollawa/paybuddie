  import React from 'react'
  import pageProps from '../../../../app/utils/props/pageProps'
  import Breadcrum from '../../components/Breadcrum'
  
  
  const TermsConditions:React.FC<pageProps> = ({pageData}:pageProps) => {


    return (
      <>
  <Breadcrum pageData={pageData}/>
  
        
      </>
    )
  }
  


export default React.memo(TermsConditions)
