import { useContext ,useEffect,useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';

import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Context/Context';
import { Audio, ThreeCircles } from 'react-loader-spinner'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { uploadeImg } from '../../fetch-data-load/imgDB';
import { postUser, PostUser, UsersAll } from '../../fetch-data-load/userAuth';

const Register = () => {
    const { singUpEmainPassword, googleLogin, loading, setLoading, updateInfo } = useContext(AuthContex)
    const [users, setUsers] = useState({})
    const [userImg, setUserImg] = useState("")
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.from?.status?.pathname || '/'


    console.log(users)
    const onSubmit = data => {
        const { password, email, name, image } = data
        console.log(image)

        if (data.image) {
            uploadeImg(data.image)
                .then(result => {
                    console.log(result);
                    if (result.success) {

                        toast.success('image uploaded successfull')
                        setUserImg(result.data.display_url)

                        singUpEmainPassword(email, password)
                            .then(result => {
                                toast.success('succefull account create ')
                                updateInfo(name, userImg)
                                    .then(result => {
                                        const userInfo = {
                                            name,
                                            email,
                                            verify: true,
                                            role: 'user'
                                        }
                                        console.log(userInfo);
                                        // postUser(userInfo)
                                        //     .then(data => {
                                        //         console.log(data)
                                        //         if (data.success) {
                                        //             toast.success(data.message || 'successfull database add')
                                                    

                                        //         } else {
                                        //             toast.error(data.message)
                                        //             console.log(data.message);
                                        //         }
                                        //     })
                                        //     .catch(err => toast.error(err.message))

                                        toast.success('User info Updated')
                                        reset()
                                        navigate(from, { replace: true })
                                    })
                                    .catch(err => {
                                        toast.error(err.message)
                                        console.log(err);
                                        setLoading(false)
                                    })
                            })
                            .catch(err => {
                                setLoading(false)
                                toast.error(err.message)
                            })

                    } else {
                        toast.error(data.status)
                        console.log(data.status)

                    }
                })
                .catch(err => {
                    console.log(err);
                    toast.error(err.message)
                    setLoading(false)
                })

        }


    };



    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                toast.success('login successfull')
                navigate('/')

            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    if (loading) {
        return <div className='flex justify-center items-center'>
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

            <div className="h-screen md:flex">
                <div
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
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd" />
                                </svg>
                                <input {...register('name', { required: true })} className="pl-2 outline-none border-none" type="text" name="name" id="name" placeholder="Full name" />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input className="pl-2 outline-none border-none" {...register('email', { required: true })} type="email" name="email" id="" placeholder="Email Address" />
                            </div>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd" />
                                </svg>
                                <input {...register('password', { required: true })} className="pl-2 outline-none border-none" type="password" name="password" id="" placeholder="Password" />
                            </div>
                            <input {...register('image')}
                                accept='image/*'
                                type="file"
                                id="img"
                                alt=""
                                className='mt-2 rounded-lg border-4 border-blue-700' />
                            <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sing Up</button>
                        </form>
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