    import React from 'react'
    import MainBody from '../../components/MainBody'
    import CreateFaqModal from './components/CreateSliderForm'
    import EditSliderForm from './components/EditSliderForm'
    import { useSelector } from 'react-redux'
    import { useGetSlidersQuery, selectSliderById } from './sliderApiSlice'
    import pageProps from '../../../../app/utils/props/pageProps'
    import SliderTableData from './components/SliderTableData'
    
    
    const Slider = ({pageData}:pageProps)  => {
     
    const {
        data:sliders,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSlidersQuery('sliderList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
    
    let content
    
    if (isLoading) content = <p>Loading...</p>
    
    if (isError) {
        // content = <p className="errmsg">{error?.data?.message}</p>
    }
    
    if (isSuccess) {
        const { ids } = sliders
    
        const tableContent = ids?.length
            ? ids.map((sliderId:string|number ,i:number) => <SliderTableData key={sliderId} sliderId={sliderId} />
        )
            : null
          content= (<div className="table-responsive">
                                        <table id="example5" className="display" style={{minWidth: '845px'}}>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Image</th>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Status</th>
                                                    <th>Date Created</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               
                                               
                                               {tableContent}
                                            
                                            </tbody>
                                        </table>
                                    </div>)
    }
    
     return (
        <>
        <MainBody>
        <div className="container-fluid">
            <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">All FAQs</h4>
                                </div>
                                <div className="card-body">
    
                                    <div className="mb-5 d-flex">
                                    
                        <CreateFaqModal/>
                                    </div>
                            {content}
                                </div>
                            </div>
                        </div>
                 </div>
        </MainBody>
        </>
      )
    }
    

export default Slider