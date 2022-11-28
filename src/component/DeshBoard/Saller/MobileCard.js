import React from 'react';
import toast from 'react-hot-toast';
import { deleteMobileById, updateMobileDatas } from '../../Auth/useAuth';

const MobileCard = ({ mobile, refetch }) => {
    const { _id, img, stock, name, sellarInfo, model, ads } = mobile
   

    const handleDeleteData = () => {
        deleteMobileById(_id)
            .then(result => {
                if (result.success) {
                    toast.success(result.message)
                    refetch()
                } else {
                    toast.error(result.message)
                    console.log(result.message);
                }
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }

    const handleAddsProducts = () => {
        const dataUpdate = {
            ads: true
        }
        updateMobileDatas(_id, dataUpdate)
            .then(result => {
                if (result.success) {
                    toast.success('This product ads home page')
                    refetch()
                } else {
                    toast.error(result.message)
                }

            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }
  
    return (

        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src={img} alt="" className='w-14 h-full ' />
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{model}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{name}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {
                   ( ads === false || ads === undefined) ?
                    <button onClick={handleAddsProducts} className='btn btn-outline btn-accent'>ads  Mobile</button> : <button onClick={handleAddsProducts} className='btn  btn-success'>Succesfull ads</button>
                }
            </td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                <button onClick={handleDeleteData} className="btn btn-outline btn-warning">Delete</button>
            </td>
        </tr>

    );
};

export default MobileCard;