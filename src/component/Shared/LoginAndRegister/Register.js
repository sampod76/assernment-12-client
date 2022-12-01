import { useContext, useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';

import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Context/Context';
import { ThreeCircles } from 'react-loader-spinner'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { uploadeImg } from '../../fetch-data-load/imgDB';
import { PostUser } from '../../Auth/useAuth';


const Register = () => {
    const { singUpEmainPassword, googleLogin, loading, setLoading, updateInfo, logOut, user, userDatabase } = useContext(AuthContex)

    const [userImg, setUserImg] = useState("")
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.from?.status?.pathname || '/'


    // console.log(users)
    const onSubmit = data => {
        const { password, email, name, image, role } = data



        console.log(data)

        // if (data.image) {
        //     uploadeImg(data.image)
        //         .then(result => {
        //             // console.log(result);
        //             if (result.success) {

        //                 toast.success('image uploaded successfull')
        //                 setUserImg(result.data.display_url)
        //                 // console.log(result.data.display_url)

        singUpEmainPassword(email, password)
            .then(result => {

                toast.success('succefull account create ')
                updateInfo(name)
                    .then(result => {
                        // console.log('currentupdat')
                        const userInfo = {
                            name,
                            email,
                            verify: false,
                            role: role ? role : 'user',
                            img: result?.data?.display_url
                        }
                        // console.log(userInfo);
                        PostUser(userInfo)
                            .then(data => {
                                // console.log(data)
                                if (data.success) {
                                    toast.success(data.message || 'successfull database add')
                                    reset()

                                    logOut().then(res => navigate('/login'))

                                    // navigate(from, { replace: true })

                                } else {
                                    toast.error(data.message)
                                    console.log(data.message);
                                }
                            })
                            .catch(err => toast.error(err.message))

                        toast.success('User info Updated++++')

                    })
                    .catch(err => {
                        toast.error(err.message)
                        // console.log(err);
                        setLoading(false)
                    })
            })
            .catch(err => {
                setLoading(false)
                // console.log(err);
                toast.error(err.message)
            })

        //             } else {
        //                 toast.error(data.status)
        //                 // console.log(data.status)

        //             }
        //         })
        //         .catch(err => {
        //             // console.log(err);
        //             toast.error(err.message)
        //             setLoading(false)
        //         })

        // }


    };



    const handleGoogle = () => {
        googleLogin()
            .then(result => {

                console.log(result)
                toast.success('login successfull')

                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email,
                    verify: false,
                    role: 'user'
                }
                // console.log(userInfo);
                // console.log(userInfo);
                // এটি খুব গুরুত্বপূর্ণ এইখানে যখন একজন ইউজার প্রথমবার লগইন করবে তখনই তাকে আমরা ক্রিয়েট করে ফেলব | তারপর আবার আরেকটা aip  মাধ্যমে ডাটাবেজ থেকে ইউজারটি কেনে কন্টাক্ট এ ফ্রিতে রাখবো তার পরে এইখানে এইখানে এই কন্ডিশন দেবো । না হলে সে বারবার আমার ডাটাবেজের উজার  ক্রিয়েট করতে থাকবে
                if (userDatabase?.email === result.user.email) {
                    console.log('instde')
                    return navigate(from, { replace: true })
                }
                PostUser(userInfo)
                    .then(data => {
                        console.log(data)
                        if (data.success) {
                            toast.success(data.message || 'successfull database add')


                            navigate(from, { replace: true })


                        } else {
                            toast.error(data.message)
                            console.log(data.message);
                            setLoading(false)
                        }
                    })
                    .catch(err => {
                        setLoading(false)
                        toast.error(err.message)
                    })

                toast.success('User info Updated++++')

            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            })
    }


    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperclass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    }
    return (
        <div>



            <div>
                <div className="  py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Welcome Register page</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">

                                            <div className="flex items-center  border-2 py-2 px-3 rounded-2xl mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                        clipRule="evenodd" />
                                                </svg>
                                                <input {...register('name', { required: true })} className="pl-2 w-full outline-none bg-slate-100 rounded-lg p-2  border-none" type="text" name="name" id="name" placeholder="Full name" /><br />
                                            </div>

                                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                </svg>
                                                <input className="pl-2 outline-none border-none" {...register('email', { required: true })} type="email" name="email" id="" placeholder="Email Address" /><br />
                                            </div>
                                            {errors.email && <span>This field is required {errors.message}</span>}
                                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fillRule="evenodd"
                                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                        clipRule="evenodd" />
                                                </svg>
                                                <input {...register('password', { required: 'must be password' })} className="pl-2 outline-none border-none" type="password" name="password" id="" placeholder="Password" /> <br />
                                            </div>
                                            {errors.password && <span>{errors.password.message}</span>}
                                            <div className='flex justify-between'>
                                                <div className='flex items-center' >
                                                    <h1 className='text-xl font-bold '>Account Type: </h1>

                                                </div>
                                                <div>
                                                    <label htmlFor="user">User</label>
                                                    <input {...register('role')} type="radio" value="user" className='mx-1' name="role" id="user" />
                                                    <label htmlFor="sellar">sellar</label>
                                                    <input {...register('role')} type="radio" value="sellar" className='mx-1' name="role" id="sellar" />
                                                    {/* <select {...register('role')} defaultValue='user' name="" id="" className='border-4 rounded-lg p-2'>
                                        <option value="user" className='border-1 rounded-lg p-1'>User</option>
                                        <option value="sellar" className='border-1 rounded-lg p-1'>Sellar</option>
                                    </select> */}
                                                </div>
                                            </div>

                                            <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login in</button>
                                        </form>
                                        {errors.image && <span>This field is required {errors?.image?.message}</span>}

                                        <div className='flex gap-4 justify-center'>
                                            <Link onClick={handleGoogle}><FcGoogle className='text-4xl'></FcGoogle></Link>
                                            <Link ><FaGithubSquare className='text-4xl'></FaGithubSquare></Link>
                                        </div>
                                        <Link to='/register' className='underline decoration-cyan-700 text-base  flex justify-center'>Create a new account </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;