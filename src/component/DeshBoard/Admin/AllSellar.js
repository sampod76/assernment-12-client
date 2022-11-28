
import React from 'react';
import toast from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { AllSellarFromBd, deleteDataHook, verifySellar, verifySellarHook } from '../../Auth/useUnivercelHook';

const AllSellar = () => {
    const { allDatasArray, isLoading, refetch } = AllSellarFromBd(`https://assernment-12-serverside.vercel.app/users?role=sellar`)

    const handleDeleteSellar = (id) => {
        deleteDataHook(`https://assernment-12-serverside.vercel.app/users/${id}`)
            .then(result => {
                if (result.success) {
                    toast.success(result.message)
                    refetch()
                } else {
                    toast.error(result.message)
                }
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err);
            })
    }

    const handleVeryfiy = (id) => {
        console.log(id);
      
        verifySellarHook(`https://assernment-12-serverside.vercel.app/updateuser/${id}`)
            .then(result => {
                if (result.success) {
                    toast.success(result.message)
                    refetch()
                }
                else {
                    toast.error(result.message)
                }
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err);
            })
    }


    if (isLoading) {
        return <div className='flex justify-center items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }

    return (
        <div>
            <h1 className='md:text-2xl font-semibold text-center p-2 mt-5 mb-2 rounded-lg border-2'>All Sellar My WebSite</h1>
            {
                allDatasArray.length > 0 &&
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                                <th>Veryfi request?</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                allDatasArray.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.role}-{user.verify ? <span className='text-green-700 font-bold'>verify</span> : <span className='text-red-500 font-bold'> Not verify</span>}</td>
                                    <td>{<button onClick={() => handleDeleteSellar(user._id)} className='btn btn-outline btn-error'>Delete</button>} </td>
                                    <td>

                                        {!user.verify ? <button onClick={() => handleVeryfiy(user._id)} className='btn btn-accent'>Accept verify</button> : <button className='  btn btn-error  '> Cancle verify</button>}
                                    </td>
                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default AllSellar;