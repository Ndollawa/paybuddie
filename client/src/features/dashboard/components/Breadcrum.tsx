import React from 'react'
import pageProps from '../../../app/utils/props/pageProps'
import useTitle from '../../../app/utils/hooks/useTitle';


const Breadcrum:React.FC<pageProps> = ({pageData}:pageProps) => {
    const {pageTitle,coverImage}= pageData!;
    useTitle(`${pageTitle}`)
  return (
<section className="page-header">
    <div className="page-header__bg"
        style={{backgroundImage: `url(${coverImage})`}}></div>
    
    {/* <!-- /.page-header__bg --> */}
    <div className="container">
        <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><span>{pageTitle}</span></li>
        </ul>
        {/* <!-- /.thm-breadcrumb list-unstyled --> */}
        <h2>{pageTitle}</h2>
    </div>
    {/* <!-- /.container --> */}
</section>
  )
}

export default React.memo(Breadcrum)
