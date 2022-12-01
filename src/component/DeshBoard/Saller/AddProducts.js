import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createOrAddProduct } from '../../Auth/useAuth';
import { AuthContex } from '../../Context/Context';
import { uploadeImg } from '../../fetch-data-load/imgDB';

const AddProducts = () => {
    const { user, userDatabase } = useContext(AuthContex)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    const onSubmit = data => {
        const { sellarname, sellarNumber, sellarEmail, sellarLoaction, useYears, name, OfficalPrice, sellarPrice, accessories, description, img } = data
        const sellarInfo = { sellarname, sellarNumber, sellarEmail, sellarLoaction, sellarPrice, }
        // console.log(data)
        // uploadeImg(image)
        //     .then(result => {
        //         if (result.success && result.status) {
        //             toast.success('image uploade')
        const mobileData = { paid: false, name, OfficalPrice, accessories, description, img, useYears, sellarInfo, stock: true, ads: false }
        createOrAddProduct(mobileData)
            .then(result => {
                if (result.success) {
                    toast.success('Successfilly add mobile')
                    reset()
                } else {
                    toast.error('mobile data not create')
                }
            })
            .catch(err => toast.error(err.message))

        //     } else {
        //         toast.error(result.status)
        //     }
        // })
        // .catch(err => toast.error(err.message))

    }
    console.log(userDatabase)

    return (
        <div className='my-3 '>

            {
                userDatabase?.verify ?
                    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 bg-slate-300 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">


                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="sellarname" className="text-sm">Sallar name</label>
                                    <input {...register('sellarname')} value={user?.displayName} id="sellarname" type="text" placeholder="Sallar name" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="number" className="text-sm">Phone Number</label>
                                    <input {...register('sellarNumber', { required: true })} id="number" type="number" placeholder="Number" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full ">
                                    <label htmlFor="Email" className="text-sm">Sellar Email</label>

                                    <input {...register('sellarEmail')} id="sellarEmail" type='email' autoComplete='on' value={user?.email} readOnly placeholder="sellarEmail" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="Location" className="text-sm">Location</label>
                                    <input {...register('sellarLoaction', { required: true })} id="Location" type="text" placeholder="Location" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="name" className="text-sm">Bandname / Catagoris</label>
                                    <input {...register('name', { required: true })} id="name" type="text" placeholder="Bandname" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="model" className="text-sm">Model</label>
                                    <input {...register('model')} id="model" type="text" placeholder="model" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="useYears" className="text-sm">Use Year</label>
                                    <input {...register('useYears', { required: true })} id="useYears" type="number" placeholder="Use Years" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="OfficalPrice" className="text-sm">OfficalPrice</label>
                                    <input {...register('OfficalPrice', { required: true })} id="OfficalPrice" type="number" placeholder="OfficalPrice" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="sellarPrice" className="text-sm">Price</label>
                                    <input {...register('sellarPrice', { required: true })} id="sellarPrice" type="number" placeholder="sellarPrice" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="description" className="text-sm">Description</label>
                                    <input {...register('description')} id="description" type="text" placeholder="" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="img" className="text-sm">Image Upload /দুঃখিত সরাসরি ফাইল আপলোড করার সিস্টেম টি একটি Cors  পলিসির কারণে দেওয়া যাচ্ছে না</label>
                                    {/* <input {...register('image', { required: 'image mast be provide' })}
                                    accept='image/*'
                                    type="file"
                                    id="img"
                                    alt=""
                                        className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" /> <br /> */}
                                    <input className='p-2 rounded-lg' {...register('img', { required: 'image mast be provide' })} type="url" placeholder='Photo Url' id="" />
                                </div>


                            </div>
                            <button type="submit" className='btn btn-primary w-fit mx-auto text-black hover:text-white'>Add</button>


                            {errors.name && <span className='text-red-400 font-bold'>name field is required {errors.message}</span>}
                            {errors.description && <span className='text-red-400 font-bold'>This field is required {errors.message}</span>}
                            {errors.accessories && <span className='text-red-400 font-bold'>This field is required {errors.message}</span>}
                            {errors.sellarPrice && <span className='text-red-400 font-bold'>sellarPrice field is required {errors.message}</span>}
                            {errors.OfficalPrice && <span className='text-red-400 font-bold'>OfficalPrice field is required {errors.message}</span>}
                            {errors.useYears && <span className='text-red-400 font-bold'>useYears field is required {errors.message}</span>}
                            {errors.sellarLoaction && <span className='text-red-400 font-bold'>sellarLoaction field is required {errors.message}</span>}
                            {errors.sellarEmail && <span className='text-red-400 font-bold'>sellarEmail field is required {errors.message}</span>}



                        </form>
                    </section> : <div>
                        <h1 className='text-2xl md:text-5xl font-semibold'>Please wait for <span className='text-red-500'>admin to verify</span> you then you can add data</h1>
                        <img src="https://cdn.vectorstock.com/i/preview-1x/32/84/cross-mark-circle-icon-to-highlight-a-mark-vector-41843284.jpg" className='w-full my-3' alt="" />
                    </div>
            }
        </div>
    );
};

export default AddProducts;