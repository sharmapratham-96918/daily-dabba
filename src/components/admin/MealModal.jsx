import { Upload, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMeal, updateTheMeal } from '../../Features/admin/adminSlice'
import LoaderComponent from '../LoaderComponent'
import {toast} from "react-toastify"

const MealModal = ({showModal , handelModal}) => {


    const {allMeals , adminSuccess ,  adminLoading , adminError , adminErrorMessage , editMeal } = useSelector(state => state.admin)

    const dispatch = useDispatch()

    const [formData , setFormData] = useState({
        name : "",
        description : "",
        image : "",
        price : "",
        isVeg : "",
        isActive : "",
    })
    

    const {name , description , image , price , isVeg , isActive} = formData


    const handelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })

    }

    const handelSubmit = (e) => {
        e.preventDefault()

        if(editMeal.isEdit){
            dispatch(updateTheMeal(formData))
            if(adminSuccess){
            handelModal()
            toast.success("Meal updated")
        }
        }else{
            dispatch(addMeal(formData))
            if(adminSuccess){
            handelModal()
            toast.success("Meal Created")
        }}



    }

    useEffect(() => {

        if(editMeal){
            setFormData(editMeal.meal)
        }

        if(adminError && adminErrorMessage){
           toast.error(adminErrorMessage) 
        }

    } , [adminError , adminErrorMessage , editMeal])

    if(adminLoading) {
        return <LoaderComponent />
    }



    return (
        <>
            {/* Background overlay */}
            <div className={showModal ? "fixed w-full inset-0 bg-opacity-50 backdrop-blur-sm" : "hidden"}></div>

            {/* Modal */}
            <div className={showModal ? "relative mr-56 bg-white rounded-2xl shadow-2xl transform transition-all" : "hidden"}>
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900">{editMeal.isEdit ? "Edit Your Meal" : "Add New Meal"}</h2>
                    <button onClick={handelModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handelSubmit}>
                    {/* Modal Body */}
                    <div className="p-6 space-y-6">
                        {/* Meal Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Meal Name</label>
                            <input
                                type="text"
                                name='name'
                                value={name}
                                onChange={handelChange}
                                placeholder="Enter meal name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Description</label>
                            <textarea
                                name='description'
                                value={description}
                                onChange={handelChange}

                                placeholder="Describe your meal..."
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Image URL</label>
                            <div className="relative">
                                <input
                                    type="url"
                                    name='image'
                                    value={image}
                                onChange={handelChange}

                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                />
                                <Upload className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Price</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-gray-500 font-medium">₹</span>
                                <input
                                    type="number"
                                    name='price'
                                    value={price}
                                onChange={handelChange}

                                    placeholder="0.00"
                                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                />
                            </div>
                        </div>
                        {/* isVeg */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Dish Type</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-gray-500 font-medium"></span>
                                <select name='isVeg' 
                                    value={isVeg}
                                onChange={handelChange}

                                 className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none">
                                    <option value="true">Veg</option>
                                    <option value="false">Non-Veg</option>
                                </select>
                            </div>
                        </div>
                        {/* isActive */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Dish Status</label>
                            <div className="relative">
                                <span className="absolute left-4 top-3.5 text-gray-500 font-medium"></span>
                                <select name='isActive'
                                value={isActive}
                                onChange={handelChange}

                                   className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none">
                                    <option value="true">Active</option>
                                    <option value="false">In-Active</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="flex space-x-3 p-6 bg-gray-50 rounded-b-2xl">
                        <button onSubmit={handelSubmit} type='submit' className="flex-1 w-full px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
                            "Save Meal"
                        </button>
                    </div>
                </form>


            </div>
        </>
    )
}


export default MealModal
