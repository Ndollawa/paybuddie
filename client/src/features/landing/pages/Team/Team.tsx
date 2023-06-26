import React from 'react'
import pageProps from '../../../../app/utils/props/pageProps'
import Breadcrum from '../../components/Breadcrum'
import { useGetTeamsQuery } from '../../../dashboard/pages/Team/teamsApiSlice'
import teamProps from '../../../../app/utils/props/teamProps'

const Team:React.FC<pageProps> = ({pageData}:pageProps) => {

   const { team } = useGetTeamsQuery("teamsList", {
            selectFromResult: ({ data }) => ({
              team: data?.ids?.map((id:string)=>data?.entities[id])		 
            }),
            }) 
console.log(team)
    return (
      <>
  <Breadcrum pageData={pageData}/>

<section className="team-grid pt-120 pb-120">
    <div className="container">
        <div className="row row-gutter-y-30 g-5">
            {
                team && team.map((t:teamProps)=>(
            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                <div className="team-card">
                    <div className="team-card__image">
                        <img src={process.env.REACT_APP_BASE_URL+"/uploads/team/"+t?.userImage} alt={t?.fullName}/>
                        <div className="team-card__social">
                          
                            {t?.socialMedia &&<>
                                {t?.socialMedia?.twitterHandle &&   <a href={t?.socialMedia?.twitterHandle}><i className="fab fa-twitter"></i></a>}
                                {t?.socialMedia.facebookHandle && <a href={t?.socialMedia.facebookHandle}><i className="fab fa-facebook"></i></a>}
                                {t?.socialMedia.whatsapp && <a href={t?.socialMedia.whatsapp}><i className="fab fa-pinterest"></i></a>}
                                {t?.socialMedia.instagram && <a href={t?.socialMedia.instagram}><i className="fab fa-instagram"></i></a>}

                            </>}
                          
                            
                            
                            
                        </div>
                        {/* <!-- /.team-card__social --> */}
                    </div>
                    {/* <!-- /.team-card__image --> */}
                    <div className="team-card__content">
                        <div className="team-card__content__inner">
                            <h3 className="team-card__title"><a href={`/our-team/${t._id}`}>{t?.fullName}</a></h3>
                            <p className="team-card__designation">{t?.position}</p>
                        </div>
                        {/* <!-- /.team-card__content__inner --> */}
                    </div>
                    {/* <!-- /.team-card__content --> */}
                </div>
                {/* <!-- /.team-card --> */}
            </div>

                ))
            }
          
        </div>
        {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</section>
{/* <!-- /.team-grid --> */}

    </>
  )
}

export default React.memo(Team)
