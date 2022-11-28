import React, { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { AllusersForAdmin } from '../../Auth/useAuth';

const Allusers = () => {
    const { allusers, isLoading, refetch } = AllusersForAdmin()
    // console.log(allusers)
 
    // const handle 

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
            <h1 className='md:text-2xl font-semibold text-center p-2 mt-5 mb-2 rounded-lg border-2'>All User/buyer My WebSite</h1>
            {
                allusers.length > 0 &&
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                                <th>Veryfi?</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                allusers.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.role !== 'admin' && <button>Delete</button>} </td>
                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Allusers;