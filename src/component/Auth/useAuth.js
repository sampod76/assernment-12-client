import React from "react"
import axios from 'axios'
import { async } from "@firebase/util"

// const url = 

export const PostUser = async (userInfo) => {

    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    const data = await res.json()

    return data


}

export const allMobiels = async () => {
    const res = await axios.get(`http://localhost:5000/mobiles`)
    // console.log(res)
    return res.data

}

export const catagoriMobiel = async (bandname)=>{
    const res = await axios.get(`http://localhost:5000/mobiles?catagori=${bandname}`)
    // console.log(res)
    return res.data
}

export const singleMobile = async (id) => {
    const res = await axios.get(`http://localhost:5000/mobiles/${id}`)
    return res.data
}



