import React from 'react'
import { useSelector } from 'react-redux'
import { selectSliderById,useGetSlidersQuery } from '../sliderApiSlice'
import EditSliderForm from './EditSliderForm'

const SliderTableData = ({sliderId}:any) => {
    const { slider } = useGetSlidersQuery("slidersList", {
        selectFromResult: ({ data }) => ({
            slider: data?.entities[sliderId]
        }),
    })
    if (slider) {
        const created = new Date(slider.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })
    
        const updated = new Date(slider.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })
    
        const handleEdit = (id:string) => <EditSliderForm _id={id} />
    
        return (
            <tr key={sliderId}>
                    <td></td>
                    <td>{slider.question}</td>
                    <td>{slider.response}</td>
                    <td>{slider.status}</td>
                    <td>{created}</td>
                    <td>
                        <div className="d-flex">
                            <button type="button" className="btn btn-primary shadow btn-xs sharp me-1"  data-bs-toggle="modal" data-bs-target=".edit-slider-form" onClick={()=>handleEdit(slider._id)}><i className="fas fa-pencil-alt"></i></button>
                            <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
                        </div>												
                    </td>												
                </tr>
        )
    
    } else return null
  
}

export default SliderTableData