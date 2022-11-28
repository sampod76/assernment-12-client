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

        if (data.image) {
            uploadeImg(data.image)
                .then(result => {
                    // console.log(result);
                    if (result.success) {

                        toast.success('image uploaded successfull')
                        setUserImg(result.data.display_url)
                        // console.log(result.data.display_url)

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

                    } else {
                        toast.error(data.status)
                        // console.log(data.status)

                    }
                })
                .catch(err => {
                    // console.log(err);
                    toast.error(err.message)
                    setLoading(false)
                })

        }


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
                height="200"
                width="200"
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

            <div className="h-screen ">
                {/* <div
                    className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">TrustShop</h1>
                        <p className="text-white mt-1">The most popular shope</p>
                        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div> */}
                <div className=" md:w-1/2 lg:w-1/3 mx-auto">
                    <div className=" bg-slate-200 p-2  rounded-xl p-5 h-fit  ">
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full' >
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                            <div className="flex items-center  border-2 py-2 px-3 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd" />
                                </svg>
                                <input {...register('name', { required: true })} className="pl-2 w-full outline-none bg-slate-100 rounded-lg p-2  border-none" type="text" name="name" id="name" placeholder="Full name" /><br />
                            </div>
                            {errors.name && <span className='text-red-400 font-bold'>This field is required {errors.message}</span>}

                            <div className="flex items-center  border-2 py-2 px-3 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input className="pl-2 w-full outline-none bg-slate-100 rounded-lg p-2  border-none" {...register('email', { required: true })} type="email" name="email" id="" placeholder="Email Address" /><br />
                            </div>
                            {errors.email && <span className='text-red-400 font-bold'>This field is required {errors.message}</span>}
                            <div className="flex items-center  border-2 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd" />
                                </svg>
                                <input {...register('password', { required: 'must be password' })} className="pl-2 w-full outline-none bg-slate-100 rounded-lg p-2  border-none" type="password" name="password" id="" placeholder="Password" /> <br />
                            </div>
                            {errors.password && <span className='text-red-400 font-bold'>{errors.password.message}</span>}
                            <input {...register('image', { required: 'image mast be provide' })}
                                accept='image/*'
                                type="file"
                                id="img"
                                alt=""
                                className='mt-2 rounded-lg border-4 border-blue-700' /> <br />
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
                            <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sing Up</button>


                        </form>
                        {errors.image && <span className='text-red-400 font-bold'>This field is required {errors?.image?.message}</span>}

                        <div className='flex gap-4 justify-center'>
                            <Link onClick={handleGoogle}><FcGoogle className='text-4xl'></FcGoogle></Link>
                            <Link ><FaGithubSquare className='text-4xl'></FaGithubSquare></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;