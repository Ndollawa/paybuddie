import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useGetTeamsQuery } from '../../../../dashboard/pages/Team/teamsApiSlice'
import pageProps from '../../../../../app/utils/props/pageProps'
import Breadcrum from '../../../components/Breadcrum'


const Member:React.FC<pageProps> = ({pageData}:pageProps) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const { team } = useGetTeamsQuery("teamsList", {
             selectFromResult: ({ data }) => ({
               team: id && data?.entities[id]		 
             }),
             }) 
             console.log(
                team
             )
if(!team) navigate('/error/404')
    return (
      <>
  <Breadcrum pageData={{pageTitle:team?.fullName}}/>


        <section className="team-details pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team-details__image wow fadeInUp" data-wow-duration="1500ms">
                            <img src={process.env.REACT_APP_BASE_URL+"/uploads/team/"+team?.userImage} alt={team?.fullName}/>
                        </div>
                        {/* <!-- /.team-details__image --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                    <div className="col-lg-6">
                        <div className="team-details__content">
                            <div className="team-details__floated">{team?.fullName}</div>
                            {/* <!-- /.team-details__floated --> */}
                            <div className="block-title text-left">
                                <p className="block-title__tagline">{team?.position}</p>
                                {/* <!-- /.block-title__tagline --> */}
                                <h2 className="block-title__title">{team?.fullName}</h2>
                                {/* <!-- /.block-title__title --> */}
                            </div>
                            {/* <!-- /.block-title --> */}
                            <div className="team-details__social">
                                
                            {team?.socialMedia &&<>
                                {team?.socialMedia?.twitterHandle &&   <a href={team?.socialMedia?.twitterHandle}><i className="fab fa-twitter"></i></a>}
                                {team?.socialMedia.facebookHandle && <a href={team?.socialMedia.facebookHandle}><i className="fab fa-facebook"></i></a>}
                                {team?.socialMedia.whatsapp && <a href={team?.socialMedia.whatsapp}><i className="fab fa-pinterest"></i></a>}
                                {team?.socialMedia.instagram && <a href={team?.socialMedia.instagram}><i className="fab fa-instagram"></i></a>}

                            </>}
                          
                            
                            </div>
                            {/* <!-- /.team-details__social --> */}
                            <p className="team-details__highlight">About {team?.fullName}</p>
                            
                            {/* <!-- /.team-details__highlight --> */}
                            <p className="team-details__text">{team?.bio}</p>
                                {/* <!-- /.team-details__text --> */}
                        </div>
                        {/* <!-- /.team-details__content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section>
        {/* <!-- /.team-details --> */}

        <div className="container">
            <hr className="block-separator"/>
        </div>
     
    </>
  )
}

export default Member
