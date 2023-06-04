import React,{useState,useEffect} from 'react'
import pageProps from '../../../../app/utils/props/pageProps'
import Breadcrum from '../../components/Breadcrum'
import { useGetServicesQuery } from '../../../dashboard/pages/Service/servicesApiSlice'
import serviceProps from '../../../../app/utils/props/serviceProps'


const Services:React.FC<pageProps> = ({pageData}:pageProps) => {
    // const { services } = useGetServicesQuery("servicesList", {
    //         selectFromResult: ({ data }) => ({
    //           services: data?.ids?.map((id:string)=>data?.entities[id])		 
    //         }),
    //         }) 
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetServicesQuery('servicesList', {
        pollingInterval: 1500,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    const [services, setServices] = useState(data?.entities)
    useEffect(() => {
        setServices(data?.entities)
    }, [data])

    return (
      <>
  <Breadcrum pageData={pageData}/>


<section className="service-grid pt-120 pb-140">
    <div className="container">
        <div className="row row-gutter-y-50 g-5">
            {
                (Object.values(services) as serviceProps[])?.map((service:serviceProps)=>{
                    return (

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-card">
                            <div className="service-card__image"><a href={`/services/${service._id}`}>
                                <img src={process.env.REACT_APP_BASE_URL+"/uploads/service/"+service?.image} alt={service?.title}/>
                                </a>
                            </div>
                            {/* <!-- /.service-card__image --> */}
                            <div className="service-card__content">
                                <div className="service-card__content__inner">
                                    <div className="service-card__icon">
                                        <i className={service?.icon}></i>
                                    </div>
                                    {/* <!-- /.service-card__icon --> */}
                                    <h3 className="service-card__title">
                                        <a href={`/services/${service._id}`}>{service?.title}</a>
                                    </h3>
                                    {/* <!-- /.service-card__title --> */}
                                    <p className="service-card__text">{service?.description}</p>
                                        {/* <!-- /.service-card__text --> */}
                                    <a href={`/services/${service._id}`} className="service-card__link">
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                    {/* <!-- /.service-card__link --> */}
                                </div>
                                {/* <!-- /.service-card__content__inner --> */}
                            </div>
                            {/* <!-- /.service-card__content --> */}
                        </div>
                        {/* <!-- /.service-card --> */}
                    </div>
                )})
            }
          
        </div>
        {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</section>
{/* <!-- /.service-grid pt-120 pb-120 --> */}

    </>
  )
}

export default React.memo(Services)
