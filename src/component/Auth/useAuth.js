import React from "react"
import axios from 'axios'
import { async } from "@firebase/util"
import { useQuery } from "react-query"

// const url = 

export const jwtTokenCreate = async (email) => {
    const res = await fetch(`http://localhost:5000/jwt`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email})
    })
    const data = await res.json()
    return data

}

export const PostUser = async (userInfo) => {

    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(userInfo)
    })
    const data = await res.json()

    return data


}

export const allMobiels = async () => {
    const res = await axios.get(`http://localhost:5000/mobiles`, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
    // console.log(res)
    return res.data

}

export const catagoriMobiel = async (bandname) => {
    const res = await axios.get(`http://localhost:5000/mobiles?catagori=${bandname}`, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
    // console.log(res)
    return res.data
}

export const singleMobile = async (id) => {
    const res = await axios.get(`http://localhost:5000/mobiles/${id}`, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
    return res.data
}



export const BookingMobile = (PostData) => {

    return fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(PostData)
    })

}
export const WhiteList = (PostData) => {

    return fetch('http://localhost:5000/whitelist', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(PostData)
    })

}

export const whiteListDeletd = (id) => {
    return fetch(`http://localhost:5000/whitelist/${id}`, {
        method: 'DELETE',
        headers: {

            authorization: localStorage.getItem('token')
        },

    })
}
export const bookingListDeletd = (id) => {
    return fetch(`http://localhost:5000/booking/${id}`, {
        method: 'DELETE',
        headers: {

            authorization: localStorage.getItem('token')
        },

    })
}









